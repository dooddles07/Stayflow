import { api } from './client'
import type { Notice, NoticeCategory } from '#/lib/mock/types'

// Server returns notices sorted (pinned desc, postedAt desc); postedAt is an ISO string.
export const getNotices = () => api.get<Notice[]>('/notices')

export interface NoticeInput {
  title: string
  category: NoticeCategory
  body: string
  pinned: boolean
}

// Writes require STAFF/MANAGEMENT (enforced server-side). postedAt/id/postedBy are set by the server.
export const createNotice = (data: NoticeInput) => api.post<Notice>('/notices', data)
export const updateNotice = (id: string, data: NoticeInput) => api.put<Notice>(`/notices/${id}`, data)
export const deleteNotice = (id: string) => api.del<void>(`/notices/${id}`)
