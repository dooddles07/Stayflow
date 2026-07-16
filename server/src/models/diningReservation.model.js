import { prisma } from '../config/db.js'

const includeRelations = { restaurant: true, resident: true, table: true }

export const DiningReservationModel = {
  findAll: () => prisma.diningReservation.findMany({ include: includeRelations, orderBy: { createdAt: 'desc' } }),
  findById: (id) => prisma.diningReservation.findUnique({ where: { id }, include: includeRelations }),
  findByResident: (residentId) => prisma.diningReservation.findMany({ where: { residentId }, include: { restaurant: true, table: true } }),
  create: (data) => prisma.diningReservation.create({ data, include: includeRelations }),
  update: (id, data) => prisma.diningReservation.update({ where: { id }, data, include: includeRelations }),
  remove: (id) => prisma.diningReservation.delete({ where: { id } }),

  // Smallest AVAILABLE table at the restaurant that seats the party — don't burn a
  // 10-top on a party of 2 if a smaller table fits.
  findAvailableTable: (restaurantId, minSeats) =>
    prisma.diningTable.findFirst({
      where: { restaurantId, status: 'AVAILABLE', seats: { gte: minSeats } },
      orderBy: { seats: 'asc' },
    }),
  setTableStatus: (tableId, status) => prisma.diningTable.update({ where: { id: tableId }, data: { status } }),
}
