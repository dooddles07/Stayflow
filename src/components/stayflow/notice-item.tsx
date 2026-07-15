import { formatDistanceToNowStrict } from 'date-fns'
import { Pin } from 'lucide-react'
import { cn } from '#/lib/utils'
import type { Notice, NoticeCategory } from '#/lib/mock/types'

const categoryTone: Record<NoticeCategory, string> = {
  Important: 'bg-rose-500/15 text-rose-400 ring-rose-500/25',
  Maintenance: 'bg-accent-gold/15 text-accent-gold ring-accent-gold/30',
  Events: 'bg-accent-indigo/15 text-accent-indigo-soft ring-accent-indigo/30',
  General: 'bg-surface-hover text-muted-text ring-border',
}

export function NoticeItem({ notice, className }: { notice: Notice; className?: string }) {
  return (
    <div className={cn('animate-fade-in rounded-2xl border border-border bg-surface p-4', className)}>
      <div className="mb-2 flex items-center justify-between gap-2">
        <span className={cn('rounded-full px-2 py-0.5 text-[10px] font-medium ring-1 ring-inset', categoryTone[notice.category])}>
          {notice.category}
        </span>
        {notice.pinned && <Pin className="size-3.5 fill-current text-accent-gold" />}
      </div>
      <p className="text-sm font-medium text-foreground">{notice.title}</p>
      <p className="mt-1 line-clamp-2 text-xs text-muted-text">{notice.body}</p>
      <p className="mt-2 text-[11px] text-muted-text/70">
        {notice.postedBy} · {formatDistanceToNowStrict(new Date(notice.postedAt), { addSuffix: true })}
      </p>
    </div>
  )
}
