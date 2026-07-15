import { prisma } from '../config/db.js'

export const StaffModel = {
  findAll: () => prisma.staffMember.findMany({ orderBy: { name: 'asc' } }),
  findById: (id) => prisma.staffMember.findUnique({ where: { id } }),
  create: (data) => prisma.staffMember.create({ data }),
  update: (id, data) => prisma.staffMember.update({ where: { id }, data }),
  remove: (id) => prisma.staffMember.delete({ where: { id } }),
}
