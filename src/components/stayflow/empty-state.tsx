import type { LucideIcon } from 'lucide-react'
import * as React from 'react'
import { cn } from '#/lib/utils'

interface EmptyStateProps {
  icon: LucideIcon
  title: string
  description?: string
  action?: React.ReactNode
  className?: string
}

export function EmptyState({ icon: Icon, title, description, action, className }: EmptyStateProps) {
  return (
    <div className={cn('flex flex-col items-center justify-center rounded-2xl border border-dashed border-border px-6 py-14 text-center', className)}>
      <span className="mb-3 flex size-12 items-center justify-center rounded-full bg-surface-hover text-muted-text">
        <Icon className="size-5" />
      </span>
      <p className="text-sm font-medium text-foreground">{title}</p>
      {description && <p className="mt-1 max-w-sm text-xs text-muted-text">{description}</p>}
      {action && <div className="mt-4">{action}</div>}
    </div>
  )
}
