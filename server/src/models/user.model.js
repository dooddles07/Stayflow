import { prisma } from '../config/db.js'

export const UserModel = {
  findByEmail: (email) => prisma.user.findUnique({ where: { email }, include: { resident: true, staff: true } }),
  findById: (id) => prisma.user.findUnique({ where: { id }, include: { resident: true, staff: true } }),
  create: (data) => prisma.user.create({ data }),
}
