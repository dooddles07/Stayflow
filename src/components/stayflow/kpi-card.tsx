import type { LucideIcon } from 'lucide-react'
import { TrendingDown, TrendingUp } from 'lucide-react'
import { cn } from '#/lib/utils'

interface KpiCardProps {
  icon: LucideIcon
  label: string
  value: string
  delta?: { value: string; positive: boolean }
  hint?: string
  className?: string
}

export function KpiCard({ icon: Icon, label, value, delta, hint, className }: KpiCardProps) {
  return (
    <div
      className={cn(
        'animate-fade-in rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent-indigo/30',
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <span className="flex size-10 items-center justify-center rounded-xl bg-accent-indigo/15 text-accent-gold">
          <Icon className="size-[18px]" />
        </span>
        {delta && (
          <span
            className={cn(
              'flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium',
              delta.positive ? 'bg-emerald-500/15 text-emerald-400' : 'bg-rose-500/15 text-rose-400',
            )}
          >
            {delta.positive ? <TrendingUp className="size-3" /> : <TrendingDown className="size-3" />}
            {delta.value}
          </span>
        )}
      </div>
      <p className="mt-4 text-2xl font-semibold tracking-tight text-foreground">{value}</p>
      <p className="mt-1 text-xs text-muted-text">{label}</p>
      {hint && <p className="mt-2 text-[11px] text-muted-text/70">{hint}</p>}
    </div>
  )
}
