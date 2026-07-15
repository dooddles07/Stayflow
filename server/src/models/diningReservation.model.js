import { prisma } from '../config/db.js'

export const DiningReservationModel = {
  findAll: () => prisma.diningReservation.findMany({ include: { restaurant: true, resident: true }, orderBy: { createdAt: 'desc' } }),
  findById: (id) => prisma.diningReservation.findUnique({ where: { id }, include: { restaurant: true, resident: true } }),
  findByResident: (residentId) => prisma.diningReservation.findMany({ where: { residentId }, include: { restaurant: true } }),
  create: (data) => prisma.diningReservation.create({ data, include: { restaurant: true, resident: true } }),
  update: (id, data) => prisma.diningReservation.update({ where: { id }, data, include: { restaurant: true, resident: true } }),
  remove: (id) => prisma.diningReservation.delete({ where: { id } }),
}
