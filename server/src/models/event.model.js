import { prisma } from '../config/db.js'

const includeRsvps = { rsvps: { include: { resident: true } } }

export const EventModel = {
  findAll: () => prisma.communityEvent.findMany({ include: includeRsvps, orderBy: { date: 'asc' } }),
  findById: (id) => prisma.communityEvent.findUnique({ where: { id }, include: includeRsvps }),
  create: (data) => prisma.communityEvent.create({ data }),
  update: (id, data) => prisma.communityEvent.update({ where: { id }, data }),
  remove: (id) => prisma.communityEvent.delete({ where: { id } }),
  addAttendee: (id, residentId) =>
    prisma.eventRsvp.upsert({
      where: { eventId_residentId: { eventId: id, residentId } },
      update: {},
      create: { eventId: id, residentId },
    }),
  removeAttendee: (id, residentId) =>
    prisma.eventRsvp.deleteMany({ where: { eventId: id, residentId } }),
}
