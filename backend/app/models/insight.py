from datetime import datetime
from typing import List, Optional
from pydantic import BaseModel, Field
import uuid


class EvidenceItem(BaseModel):
    source: str = Field(..., description="Where the evidence comes from")
    snippet: str = Field(..., description="Relevant excerpt or summary")


class RiskItem(BaseModel):
    description: str
    likelihood: float = Field(ge=0, le=1, default=0.3)


class RecommendedAction(BaseModel):
    action: str
    priority: str = Field(default="medium")


class ReasoningStep(BaseModel):
    detail: str
    source: Optional[str] = None


class StructuredInsight(BaseModel):
    insight_id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    summary: str
    reasoning: List[str]
    evidence: List[str]
    risks: List[str]
    recommended_actions: List[str]
    confidence: float = Field(ge=0, le=1, default=0.5)
    timestamp: datetime = Field(default_factory=datetime.utcnow)


class AgentTrace(BaseModel):
    intent: str
    retrieval_notes: List[str]
    signal_findings: List[str]
    reasoning_steps: List[str]
    risks: List[str]
    validation: List[str]


class InsightResponse(BaseModel):
    insight: StructuredInsight
    trace: AgentTrace


class MetricSignal(BaseModel):
    name: str
    current: float
    previous: Optional[float] = None
    trend: Optional[float] = None
    unit: Optional[str] = None


class InsightQuery(BaseModel):
    question: str
    signals: List[MetricSignal] = Field(default_factory=list)
    top_k: int = 5
