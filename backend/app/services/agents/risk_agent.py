from .base import AgentContext, BaseAgent


class RiskAgent(BaseAgent):
    def __init__(self) -> None:
        super().__init__(name="risk")

    def run(self, context: AgentContext) -> AgentContext:
        intent = context.get("intent", "")
        aggregate_change = float(context.get("aggregate_change", 0))
        risks = []
        if intent == "risk_assessment" or aggregate_change > 0.1:
            risks.append("Elevated operational risk detected")
        if not risks:
            risks.append("No critical risks identified, monitor periodically")
        context["risks"] = risks
        context.setdefault("trace", {}).setdefault("risk", []).extend(risks)
        return context
