from typing import List
from statistics import mean
from app.models.insight import MetricSignal
from .base import AgentContext, BaseAgent


class SignalAgent(BaseAgent):
    def __init__(self) -> None:
        super().__init__(name="signal")

    def run(self, context: AgentContext) -> AgentContext:
        signals: List[MetricSignal] = context.get("signals", [])
        findings = []
        for sig in signals:
            change = None
            if sig.previous is not None:
                change = sig.current - sig.previous
            elif sig.trend is not None:
                change = sig.trend
            if change is not None:
                direction = "increased" if change > 0 else "decreased"
                findings.append(f"{sig.name} {direction} by {abs(change):.2f}{sig.unit or ''}")
        if not findings:
            findings.append("No explicit signal deltas provided")
        context["signal_findings"] = findings
        context.setdefault("trace", {}).setdefault("signal", []).extend(findings)
        context["aggregate_change"] = mean([abs(f.trend or 0) for f in signals]) if signals else 0
        return context
