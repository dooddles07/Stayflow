import { prisma } from '../config/db.js'

export const NoticeModel = {
  findAll: () => prisma.notice.findMany({ orderBy: [{ pinned: 'desc' }, { postedAt: 'desc' }] }),
  findById: (id) => prisma.notice.findUnique({ where: { id } }),
  create: (data) => prisma.notice.create({ data }),
  update: (id, data) => prisma.notice.update({ where: { id }, data }),
  remove: (id) => prisma.notice.delete({ where: { id } }),
}
