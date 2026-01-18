from datetime import datetime
from .base import AgentContext, BaseAgent
from app.models.insight import StructuredInsight, AgentTrace


class Synthesizer(BaseAgent):
    def __init__(self) -> None:
        super().__init__(name="synthesizer")

    def run(self, context: AgentContext) -> AgentContext:
        summary = context.get("proposed_summary", "Operational insight")
        reasoning_steps = context.get("reasoning_steps", [])
        evidence = context.get("retrieved_chunks", [])
        risks = context.get("risks", [])
        signal_findings = context.get("signal_findings", [])
        validation = context.get("validation", [])
        confidence = max(0.3, min(0.9, 0.6 + 0.05 * len(evidence)))

        insight = StructuredInsight(
            summary=summary,
            reasoning=reasoning_steps or ["Reasoning unavailable"],
            evidence=evidence or ["No evidence retrieved"],
            risks=risks or ["Risks not evaluated"],
            recommended_actions=[
                "Validate with stakeholders",
                "Monitor KPIs for 48h",
                "Address top risk item",
            ],
            confidence=confidence,
            timestamp=datetime.utcnow(),
        )

        trace = AgentTrace(
            intent=context.get("intent", "unknown"),
            retrieval_notes=context.get("trace", {}).get("retrieval", []),
            signal_findings=signal_findings,
            reasoning_steps=reasoning_steps,
            risks=risks,
            validation=validation,
        )

        context["insight"] = insight
        context["trace_model"] = trace
        return context
