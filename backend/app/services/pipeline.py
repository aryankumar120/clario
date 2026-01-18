from typing import Dict, Any
from app.services.agents.base import AgentContext
from app.services.agents.intent_agent import IntentAgent
from app.services.agents.retrieval_agent import RetrievalAgent
from app.services.agents.signal_agent import SignalAgent
from app.services.agents.reasoning_agent import ReasoningAgent
from app.services.agents.risk_agent import RiskAgent
from app.services.agents.verification_agent import VerificationAgent
from app.services.agents.synthesizer import Synthesizer
from app.storage.vector_index import VectorIndex
from app.models.insight import MetricSignal


class InsightPipeline:
    def __init__(self, index: VectorIndex) -> None:
        self.index = index
        self.agents = [
            IntentAgent(),
            RetrievalAgent(index=self.index),
            SignalAgent(),
            ReasoningAgent(),
            RiskAgent(),
            VerificationAgent(),
            Synthesizer(),
        ]

    def run(self, payload: Dict[str, Any]) -> Dict[str, Any]:
        context: AgentContext = AgentContext()
        context.update(payload)
        # Ensure signals are MetricSignal instances (payload.model_dump() gives dicts)
        if "signals" in context:
            context["signals"] = [
                sig if isinstance(sig, MetricSignal) else MetricSignal(**sig)
                for sig in context.get("signals", [])
            ]
        for agent in self.agents:
            context = agent.run(context)
        return context
