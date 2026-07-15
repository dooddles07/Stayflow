import { Link } from '@tanstack/react-router'
import type { LucideIcon } from 'lucide-react'
import { cn } from '#/lib/utils'

interface QuickActionCardProps {
  icon: LucideIcon
  label: string
  description?: string
  to: string
  className?: string
}

export function QuickActionCard({ icon: Icon, label, description, to, className }: QuickActionCardProps) {
  return (
    <Link
      to={to}
      className={cn(
        'group animate-fade-in flex flex-col gap-3 rounded-2xl border border-border bg-surface p-4 transition-all hover:-translate-y-0.5 hover:border-accent-indigo/40 hover:bg-surface-hover',
        className,
      )}
    >
      <span className="flex size-10 items-center justify-center rounded-xl bg-accent-indigo/15 text-accent-gold transition-transform group-hover:scale-105">
        <Icon className="size-[18px]" />
      </span>
      <div>
        <p className="text-sm font-medium text-foreground">{label}</p>
        {description && <p className="mt-0.5 text-xs text-muted-text">{description}</p>}
      </div>
    </Link>
  )
}
