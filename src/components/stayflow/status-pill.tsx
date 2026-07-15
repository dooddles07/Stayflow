import { cn } from '#/lib/utils'

export type PillTone = 'success' | 'warning' | 'danger' | 'info' | 'neutral'

const toneClasses: Record<PillTone, string> = {
  success: 'bg-emerald-500/15 text-emerald-400 ring-1 ring-inset ring-emerald-500/25',
  warning: 'bg-accent-gold/15 text-accent-gold ring-1 ring-inset ring-accent-gold/30',
  danger: 'bg-rose-500/15 text-rose-400 ring-1 ring-inset ring-rose-500/25',
  info: 'bg-accent-indigo/15 text-accent-indigo-soft ring-1 ring-inset ring-accent-indigo/30',
  neutral: 'bg-surface-hover text-muted-text ring-1 ring-inset ring-border',
}

const statusToneMap: Record<string, PillTone> = {
  confirmed: 'success',
  approved: 'success',
  open: 'success',
  'checked-in': 'success',
  arrived: 'success',
  active: 'success',
  pending: 'warning',
  maintenance: 'warning',
  reserved: 'warning',
  cancelled: 'danger',
  closed: 'danger',
  occupied: 'danger',
  'checked-out': 'neutral',
  available: 'info',
}

export function statusToTone(status: string): PillTone {
  return statusToneMap[status] ?? 'neutral'
}

export function StatusPill({
  status,
  tone,
  className,
}: {
  status: string
  tone?: PillTone
  className?: string
}) {
  const resolvedTone = tone ?? statusToTone(status)
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium capitalize',
        toneClasses[resolvedTone],
        className,
      )}
    >
      <span className="size-1.5 rounded-full bg-current" />
      {status}
    </span>
  )
}
