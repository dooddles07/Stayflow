import { prisma } from '../config/db.js'

export const TableModel = {
  findAll: () => prisma.diningTable.findMany(),
  findByRestaurant: (restaurantId) => prisma.diningTable.findMany({ where: { restaurantId } }),
  findById: (id) => prisma.diningTable.findUnique({ where: { id } }),
  create: (data) => prisma.diningTable.create({ data }),
  update: (id, data) => prisma.diningTable.update({ where: { id }, data }),
  remove: (id) => prisma.diningTable.delete({ where: { id } }),
}
