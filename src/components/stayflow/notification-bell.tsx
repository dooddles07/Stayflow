import { formatDistanceToNowStrict } from 'date-fns'
import { Bell, CalendarDays, ClipboardCheck, Megaphone, ShieldCheck, UtensilsCrossed, Users } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from '#/components/ui/popover'
import { ScrollArea } from '#/components/ui/scroll-area'
import { Button } from '#/components/ui/button'
import { useMockStore } from '#/lib/store/mock-store'
import { cn } from '#/lib/utils'
import type { NotificationKind } from '#/lib/mock/types'

const kindIcon: Record<NotificationKind, typeof Bell> = {
  booking: ClipboardCheck,
  guest: Users,
  dining: UtensilsCrossed,
  event: CalendarDays,
  notice: Megaphone,
  system: ShieldCheck,
}

export function NotificationBell() {
  const { state, dispatch } = useMockStore()
  const unread = state.notifications.filter((n) => !n.read)
  const sorted = [...state.notifications].sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          className="relative flex size-9 items-center justify-center rounded-full text-muted-text transition-colors hover:bg-surface-hover hover:text-foreground"
          aria-label={`Notifications${unread.length ? `, ${unread.length} unread` : ''}`}
        >
          <Bell className="size-[18px]" />
          {unread.length > 0 && (
            <span className="absolute right-1.5 top-1.5 size-2 rounded-full bg-accent-gold ring-2 ring-canvas" />
          )}
        </button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-80 border-border bg-surface p-0 text-foreground">
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <p className="text-sm font-semibold">Notifications</p>
          {unread.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              className="h-auto px-2 py-1 text-xs text-accent-indigo-soft hover:text-accent-gold"
              onClick={() => dispatch({ type: 'MARK_ALL_NOTIFICATIONS_READ' })}
            >
              Mark all read
            </Button>
          )}
        </div>
        <ScrollArea className="h-96">
          {sorted.length === 0 ? (
            <p className="px-4 py-8 text-center text-sm text-muted-text">No notifications yet.</p>
          ) : (
            <ul className="divide-y divide-border">
              {sorted.map((n) => {
                const Icon = kindIcon[n.kind]
                return (
                  <li key={n.id}>
                    <button
                      type="button"
                      onClick={() => dispatch({ type: 'MARK_NOTIFICATION_READ', payload: { id: n.id } })}
                      className={cn(
                        'flex w-full gap-3 px-4 py-3 text-left transition-colors hover:bg-surface-hover',
                        !n.read && 'bg-accent-indigo/[0.06]',
                      )}
                    >
                      <span
                        className={cn(
                          'mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full',
                          n.read ? 'bg-surface-hover text-muted-text' : 'bg-accent-indigo/20 text-accent-gold',
                        )}
                      >
                        <Icon className="size-4" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="flex items-center gap-2">
                          <span className={cn('truncate text-sm font-medium', !n.read && 'text-foreground')}>{n.title}</span>
                          {!n.read && <span className="size-1.5 shrink-0 rounded-full bg-accent-gold" />}
                        </span>
                        <span className="mt-0.5 block text-xs leading-snug text-muted-text">{n.body}</span>
                        <span className="mt-1 block text-[11px] text-muted-text/70">
                          {formatDistanceToNowStrict(new Date(n.createdAt), { addSuffix: true })}
                        </span>
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>
          )}
        </ScrollArea>
      </PopoverContent>
    </Popover>
  )
}
