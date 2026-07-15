import { Router } from 'express'
import authRoutes from './auth.routes.js'
import residentRoutes from './resident.routes.js'
import staffRoutes from './staff.routes.js'
import facilityRoutes from './facility.routes.js'
import bookingRoutes from './booking.routes.js'
import restaurantRoutes from './restaurant.routes.js'
import tableRoutes from './table.routes.js'
import diningReservationRoutes from './diningReservation.routes.js'
import guestRoutes from './guest.routes.js'
import eventRoutes from './event.routes.js'
import noticeRoutes from './notice.routes.js'
import notificationRoutes from './notification.routes.js'

const router = Router()

router.get('/health', (req, res) => res.json({ status: 'ok', time: new Date().toISOString() }))

router.use('/auth', authRoutes)
router.use('/residents', residentRoutes)
router.use('/staff', staffRoutes)
router.use('/facilities', facilityRoutes)
router.use('/bookings', bookingRoutes)
router.use('/restaurants', restaurantRoutes)
router.use('/tables', tableRoutes)
router.use('/dining-reservations', diningReservationRoutes)
router.use('/guests', guestRoutes)
router.use('/events', eventRoutes)
router.use('/notices', noticeRoutes)
router.use('/notifications', notificationRoutes)

export default router
