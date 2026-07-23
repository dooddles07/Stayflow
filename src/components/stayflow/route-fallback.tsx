import { Link } from '@tanstack/react-router'
import type { ErrorComponentProps } from '@tanstack/react-router'
import { AlertTriangle, CompassIcon } from 'lucide-react'

// Router-level defaultNotFoundComponent/defaultErrorComponent (wired in src/router.tsx) —
// the only fallback rendered for an unmatched URL or an uncaught render/loader error on any
// route that doesn't define its own. Deliberately standalone (no AppShell/auth dependency):
// it has to render even when the thing that broke is auth or layout state itself.
function FallbackShell({ children }: { children: React.ReactNode }) {
  return <div className="flex min-h-screen flex-col items-center justify-center bg-canvas px-4 text-center">{children}</div>
}

export function RouteNotFound() {
  return (
    <FallbackShell>
      <CompassIcon className="size-8 text-accent-gold" />
      <h1 className="mt-4 text-2xl font-semibold text-foreground">Page not found</h1>
      <p className="mt-2 max-w-sm text-sm text-muted-text">The page you're looking for doesn't exist or may have moved.</p>
      <Link to="/" className="mt-6 rounded-xl bg-accent-indigo px-4 py-2 text-sm font-medium text-white hover:bg-accent-indigo-soft">
        Back to StayFlow
      </Link>
    </FallbackShell>
  )
}

export function RouteError({ error, reset }: ErrorComponentProps) {
  if (import.meta.env.DEV) console.error(error)
  return (
    <FallbackShell>
      <AlertTriangle className="size-8 text-red-500" />
      <h1 className="mt-4 text-2xl font-semibold text-foreground">This page hit a snag</h1>
      <p className="mt-2 max-w-sm text-sm text-muted-text">
        Something went wrong loading this page. Try again, or head back to the dashboard.
      </p>
      <div className="mt-6 flex gap-3">
        <button
          type="button"
          onClick={reset}
          className="rounded-xl border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground hover:bg-surface-hover"
        >
          Try again
        </button>
        <Link to="/" className="rounded-xl bg-accent-indigo px-4 py-2 text-sm font-medium text-white hover:bg-accent-indigo-soft">
          Back to StayFlow
        </Link>
      </div>
    </FallbackShell>
  )
}
