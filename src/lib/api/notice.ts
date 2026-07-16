import { api } from './client'
import type { Notice } from '#/lib/mock/types'

// Server returns notices sorted (pinned desc, postedAt desc); postedAt is an ISO string.
export const getNotices = () => api.get<Notice[]>('/notices')
