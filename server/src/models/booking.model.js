import { prisma } from '../config/db.js'

export const BookingModel = {
  findAll: () => prisma.booking.findMany({ include: { facility: true, resident: true }, orderBy: { createdAt: 'desc' } }),
  findById: (id) => prisma.booking.findUnique({ where: { id }, include: { facility: true, resident: true } }),
  findByResident: (residentId) => prisma.booking.findMany({ where: { residentId }, include: { facility: true } }),
  create: (data) => prisma.booking.create({ data, include: { facility: true, resident: true } }),
  update: (id, data) => prisma.booking.update({ where: { id }, data, include: { facility: true, resident: true } }),
  remove: (id) => prisma.booking.delete({ where: { id } }),
}
