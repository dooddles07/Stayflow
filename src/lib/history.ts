import { toDateKey } from './booking-slots'

// True once a booking/reservation date (day granularity) is before today.
export function isPastDate(dateIso: string): boolean {
  return dateIso.slice(0, 10) < toDateKey(new Date())
}

export type HistorySort = 'newest' | 'oldest'

// Compare two ISO date strings for a history list per the chosen sort order.
export function byHistorySort(sort: HistorySort) {
  return (a: string, b: string) => (sort === 'newest' ? b.localeCompare(a) : a.localeCompare(b))
}
