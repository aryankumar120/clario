from fastapi import APIRouter
from app.models.insight import InsightQuery, InsightResponse
from app.services.pipeline import InsightPipeline

router = APIRouter()


def build_insight_router(pipeline: InsightPipeline) -> APIRouter:
    @router.post("/insights/query", response_model=InsightResponse)
    def query_insight(payload: InsightQuery) -> InsightResponse:  # type: ignore
        context = pipeline.run(payload.model_dump())
        return InsightResponse(insight=context["insight"], trace=context["trace_model"])

    return router
