import { AreaTrend } from './area-trend'

interface RevenueLineProps {
  data: { month: string; revenue: number }[]
  summary: string
  height?: number
}

export function RevenueLine({ data, summary, height = 260 }: RevenueLineProps) {
  return (
    <AreaTrend
      data={data}
      xKey="month"
      yKey="revenue"
      yLabel="Revenue"
      summary={summary}
      color="gold"
      height={height}
      valueFormatter={(v) => `$${Math.round(v / 1000)}k`}
    />
  )
}
