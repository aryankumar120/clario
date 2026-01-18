from abc import ABC, abstractmethod
from typing import Any, Dict


class AgentContext(Dict[str, Any]):
    """Mutable context shared across agents."""


class BaseAgent(ABC):
    name: str

    def __init__(self, name: str):
        self.name = name

    @abstractmethod
    def run(self, context: AgentContext) -> AgentContext:
        raise NotImplementedError
