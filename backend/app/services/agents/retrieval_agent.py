from typing import List
from app.storage.vector_index import VectorIndex
from .base import AgentContext, BaseAgent


class RetrievalAgent(BaseAgent):
    def __init__(self, index: VectorIndex) -> None:
        super().__init__(name="retrieval")
        self.index = index

    def run(self, context: AgentContext) -> AgentContext:
        question: str = context.get("question", "")
        top_k: int = context.get("top_k", 5)
        results: List[str] = self.index.search(question, top_k=top_k)
        context["retrieved_chunks"] = results
        context.setdefault("trace", {}).setdefault("retrieval", []).append(
            f"Fetched {len(results)} context chunks"
        )
        return context
