import { prisma } from '../config/db.js'

export const RestaurantModel = {
  findAll: () => prisma.restaurant.findMany({ orderBy: { name: 'asc' } }),
  findById: (id) => prisma.restaurant.findUnique({ where: { id }, include: { tables: true } }),
  create: (data) => prisma.restaurant.create({ data }),
  update: (id, data) => prisma.restaurant.update({ where: { id }, data }),
  remove: (id) => prisma.restaurant.delete({ where: { id } }),
}
