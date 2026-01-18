from .base import AgentContext, BaseAgent


class IntentAgent(BaseAgent):
    def __init__(self) -> None:
        super().__init__(name="intent")

    def run(self, context: AgentContext) -> AgentContext:
        question: str = context.get("question", "").lower()
        if any(word in question for word in ["risk", "issue", "incident"]):
            intent = "risk_assessment"
        elif any(word in question for word in ["why", "cause"]):
            intent = "diagnosis"
        elif any(word in question for word in ["what", "status", "happening"]):
            intent = "situational_awareness"
        else:
            intent = "general_insight"
        context["intent"] = intent
        context.setdefault("trace", {}).setdefault("intent", []).append(f"Intent classified as {intent}")
        return context
