interface ChartTooltipPayloadEntry {
  dataKey?: string | number
  name?: string
  value?: number | string
  color?: string
}

interface ChartTooltipProps {
  active?: boolean
  payload?: ChartTooltipPayloadEntry[]
  label?: string | number
}

export function ChartTooltip({ active, payload, label }: ChartTooltipProps) {
  if (!active || !payload || payload.length === 0) return null
  return (
    <div className="rounded-xl border border-border bg-surface px-3 py-2 text-xs shadow-lg shadow-black/30">
      {label !== undefined && <p className="mb-1 font-medium text-foreground">{label}</p>}
      {payload.map((entry) => (
        <p key={String(entry.dataKey)} className="flex items-center gap-1.5 text-muted-text">
          <span className="size-2 rounded-full" style={{ backgroundColor: entry.color }} />
          {entry.name}: <span className="font-medium text-foreground">{entry.value}</span>
        </p>
      ))}
    </div>
  )
}
