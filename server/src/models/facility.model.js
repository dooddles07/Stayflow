import { prisma } from '../config/db.js'

export const FacilityModel = {
  findAll: () => prisma.facility.findMany({ orderBy: { name: 'asc' } }),
  findById: (id) => prisma.facility.findUnique({ where: { id } }),
  create: (data) => prisma.facility.create({ data }),
  update: (id, data) => prisma.facility.update({ where: { id }, data }),
  remove: (id) => prisma.facility.delete({ where: { id } }),
}
