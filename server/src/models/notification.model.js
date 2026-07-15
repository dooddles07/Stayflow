import { prisma } from '../config/db.js'

export const NotificationModel = {
  findAll: () => prisma.appNotification.findMany({ orderBy: { createdAt: 'desc' } }),
  findById: (id) => prisma.appNotification.findUnique({ where: { id } }),
  create: (data) => prisma.appNotification.create({ data }),
  markRead: (id) => prisma.appNotification.update({ where: { id }, data: { read: true } }),
  remove: (id) => prisma.appNotification.delete({ where: { id } }),
}
