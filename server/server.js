import app from './src/app.js'
import { env } from './src/config/env.js'
import { prisma } from './src/config/db.js'

const start = async () => {
  await prisma.$connect()
  console.log('Connected to database')

  app.listen(env.port, () => {
    console.log(`StayFlow API listening on port ${env.port}`)
  })
}

start().catch((err) => {
  console.error('Failed to start server:', err)
  process.exit(1)
})

process.on('SIGTERM', async () => {
  await prisma.$disconnect()
  process.exit(0)
})
