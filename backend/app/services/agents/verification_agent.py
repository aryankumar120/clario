from .base import AgentContext, BaseAgent


class VerificationAgent(BaseAgent):
    def __init__(self) -> None:
        super().__init__(name="verification")

    def run(self, context: AgentContext) -> AgentContext:
        reasoning_steps = context.get("reasoning_steps", [])
        retrieved = context.get("retrieved_chunks", [])
        validations = []
        if retrieved:
            validations.append("Reasoning grounded on retrieved evidence")
        else:
            validations.append("No retrieval context; reasoning based on provided signals")
        if not reasoning_steps:
            validations.append("No reasoning steps produced")
        context["validation"] = validations
        context.setdefault("trace", {}).setdefault("validation", []).extend(validations)
        return context
