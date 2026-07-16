import { createFileRoute } from '@tanstack/react-router'
import * as React from 'react'
import { PageHeader } from '#/components/stayflow/page-header'
import { NoticeCard } from '#/components/stayflow/notice-card'
import { EmptyState } from '#/components/stayflow/empty-state'
import { Tabs, TabsList, TabsTrigger } from '#/components/ui/tabs'
import { Button } from '#/components/ui/button'
import { getNotices } from '#/lib/api/notice'
import { Megaphone } from 'lucide-react'
import type { Notice, NoticeCategory } from '#/lib/mock/types'

export const Route = createFileRoute('/member/notices')({
  head: () => ({ meta: [{ title: 'Notices — StayFlow Member' }] }),
  component: NoticesPage,
})

const categories: (NoticeCategory | 'All')[] = ['All', 'Important', 'Maintenance', 'Events', 'General']

// Scrollable single-row tabs with a clear gold active state (matches the profile tabs).
const tabTrigger =
  'min-h-11 shrink-0 px-3 data-[state=active]:bg-accent-gold/10 data-[state=active]:font-semibold data-[state=active]:text-accent-gold data-[state=active]:ring-1 data-[state=active]:ring-inset data-[state=active]:ring-accent-gold/30'

function NoticesPage() {
  const [notices, setNotices] = React.useState<Notice[]>([])
  const [status, setStatus] = React.useState<'loading' | 'ready' | 'error'>('loading')
  const [category, setCategory] = React.useState<(typeof categories)[number]>('All')

  React.useEffect(() => {
    let active = true
    setStatus('loading')
    getNotices()
      .then((data) => {
        if (!active) return
        setNotices(data)
        setStatus('ready')
      })
      .catch(() => {
        if (active) setStatus('error')
      })
    return () => {
      active = false
    }
  }, [])

  const visible = notices
    .filter((n) => category === 'All' || n.category === category)
    .sort((a, b) => Number(b.pinned) - Number(a.pinned) || b.postedAt.localeCompare(a.postedAt))

  return (
    <div className="mx-auto max-w-4xl">
      <PageHeader eyebrow="Community" title="Notices" description="Announcements and updates from StayFlow management." />

      <Tabs value={category} onValueChange={(v) => setCategory(v as typeof category)} className="mb-6">
        <TabsList className="flex h-auto w-full justify-start gap-1 overflow-x-auto bg-surface p-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((c) => (
            <TabsTrigger key={c} value={c} className={tabTrigger}>
              {c}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {status === 'loading' ? (
        <div className="animate-pulse space-y-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-24 rounded-2xl border border-border bg-surface" />
          ))}
        </div>
      ) : status === 'error' ? (
        <div className="rounded-2xl border border-border bg-surface p-8 text-center">
          <p className="text-sm text-muted-text">We couldn't load notices right now.</p>
          <Button onClick={() => window.location.reload()} className="mt-4 bg-accent-indigo text-white hover:bg-accent-indigo-soft">
            Retry
          </Button>
        </div>
      ) : visible.length === 0 ? (
        <EmptyState icon={Megaphone} title="No notices in this category" />
      ) : (
        <div className="space-y-3">
          {visible.map((notice) => (
            <NoticeCard key={notice.id} notice={notice} />
          ))}
        </div>
      )}
    </div>
  )
}
