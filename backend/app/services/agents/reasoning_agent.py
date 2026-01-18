from .base import AgentContext, BaseAgent


class ReasoningAgent(BaseAgent):
    def __init__(self) -> None:
        super().__init__(name="reasoning")

    def run(self, context: AgentContext) -> AgentContext:
        question = context.get("question", "")
        intent = context.get("intent", "general_insight")
        signals = context.get("signal_findings", [])
        retrieved = context.get("retrieved_chunks", [])

        reasoning_steps = []
        if signals:
            reasoning_steps.append("Signals analyzed: " + "; ".join(signals))
        if retrieved:
            reasoning_steps.append("Relevant knowledge referenced")
        if intent == "risk_assessment":
            reasoning_steps.append("Focused on identifying operational risk factors")
        else:
            reasoning_steps.append("Synthesized operational causes and next actions")

        context["reasoning_steps"] = reasoning_steps
        context.setdefault("trace", {}).setdefault("reasoning", []).extend(reasoning_steps)
        context["proposed_summary"] = f"Operational insight for: {question}" if question else "Operational insight"
        return context
