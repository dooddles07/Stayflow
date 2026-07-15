import { prisma } from '../config/db.js'

const includeRelations = {
  family: true,
  vehicles: true,
}

export const ResidentModel = {
  findAll: () => prisma.resident.findMany({ include: includeRelations, orderBy: { name: 'asc' } }),
  findById: (id) => prisma.resident.findUnique({ where: { id }, include: includeRelations }),
  create: (data) => {
    const { family = [], vehicles = [], ...rest } = data
    return prisma.resident.create({
      data: {
        ...rest,
        family: { create: family },
        vehicles: { create: vehicles },
      },
      include: includeRelations,
    })
  },
  update: (id, data) => {
    const { family, vehicles, ...rest } = data
    return prisma.resident.update({ where: { id }, data: rest, include: includeRelations })
  },
  remove: (id) => prisma.resident.delete({ where: { id } }),
}
