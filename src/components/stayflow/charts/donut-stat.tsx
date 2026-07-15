import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import { ChartTooltip } from './chart-tooltip'

const COLORS = ['var(--color-accent-indigo)', 'var(--color-accent-gold)', '#22d3ee', '#34d399', '#f472b6']

interface DonutStatProps {
  data: { name: string; value: number }[]
  summary: string
  height?: number
  centerLabel?: string
  centerValue?: string
}

export function DonutStat({ data, summary, height = 240, centerLabel, centerValue }: DonutStatProps) {
  return (
    <div role="img" aria-label={summary} className="relative" style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Tooltip content={<ChartTooltip />} />
          <Pie data={data} dataKey="value" nameKey="name" innerRadius="62%" outerRadius="88%" paddingAngle={3} stroke="none">
            {data.map((entry, index) => (
              <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      {(centerLabel || centerValue) && (
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          {centerValue && <p className="text-xl font-semibold text-foreground">{centerValue}</p>}
          {centerLabel && <p className="text-[11px] text-muted-text">{centerLabel}</p>}
        </div>
      )}
      <ul className="mt-2 flex flex-wrap justify-center gap-x-4 gap-y-1.5">
        {data.map((entry, index) => (
          <li key={entry.name} className="flex items-center gap-1.5 text-[11px] text-muted-text">
            <span className="size-2 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
            {entry.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
