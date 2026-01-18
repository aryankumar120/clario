from fastapi import APIRouter, HTTPException
from app.models.ingestion import DocumentPayload, IngestionResponse
from app.services.rag.loader import DocumentLoader
from app.storage.vector_index import VectorIndex

router = APIRouter()


class IngestionService:
    def __init__(self, loader: DocumentLoader, index: VectorIndex) -> None:
        self.loader = loader
        self.index = index

    def ingest(self, payload: DocumentPayload) -> IngestionResponse:
        chunks = self.loader.ingest(title=payload.title, content=payload.content)
        if not chunks:
            raise HTTPException(status_code=400, detail="No chunks produced")
        self.index.add_documents(chunks)
        return IngestionResponse(
            stored=True,
            chunks=len(chunks),
            message=f"Ingested {payload.title} with {len(chunks)} chunks",
        )


def build_ingestion_router(loader: DocumentLoader, index: VectorIndex) -> APIRouter:
    service = IngestionService(loader, index)

    @router.post("/ingest", response_model=IngestionResponse)
    def ingest(payload: DocumentPayload) -> IngestionResponse:  # type: ignore
        return service.ingest(payload)

    return router
