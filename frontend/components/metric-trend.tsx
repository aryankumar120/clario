type MetricTrendProps = {
  name: string;
  current: number;
  previous?: number;
  unit?: string;
};

export function MetricTrend({ name, current, previous, unit = "" }: MetricTrendProps) {
  const delta = previous !== undefined ? current - previous : 0;
  const direction = delta >= 0 ? "up" : "down";
  const deltaDisplay = previous !== undefined ? `${delta >= 0 ? "+" : ""}${delta.toFixed(2)}` : "";

  return (
    <div className="glow-card p-4">
      <div className="flex items-center justify-between text-sm text-slate-600">
        <span>{name}</span>
        <span className={direction === "up" ? "text-emerald-600" : "text-rose-600"}>{deltaDisplay}</span>
      </div>
      <div className="text-2xl font-semibold text-primary">{current.toFixed(2)} {unit}</div>
    </div>
  );
}
