from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings
from app.core.logging import setup_logging
from app.api.routes.health import router as health_router
from app.api.routes.insights import build_insight_router
from app.api.routes.ingestion import build_ingestion_router
from app.services.pipeline import InsightPipeline
from app.storage.vector_index import VectorIndex
from app.services.rag.loader import DocumentLoader

setup_logging()
index = VectorIndex(dim=settings.EMBEDDING_DIM)
loader = DocumentLoader(base_path=settings.DOCUMENT_STORE_PATH)
pipeline = InsightPipeline(index=index)

app = FastAPI(
    title=settings.PROJECT_NAME,
    version="0.1.0",
    openapi_url=f"{settings.API_V1_PREFIX}/openapi.json",
    docs_url=f"{settings.API_V1_PREFIX}/docs",
    redoc_url=f"{settings.API_V1_PREFIX}/redoc",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health_router, prefix=settings.API_V1_PREFIX)
app.include_router(build_ingestion_router(loader, index), prefix=settings.API_V1_PREFIX)
app.include_router(build_insight_router(pipeline), prefix=settings.API_V1_PREFIX)


@app.get("/")
def root() -> dict:
    return {"message": "Clario API", "docs": f"{settings.API_V1_PREFIX}/docs"}
