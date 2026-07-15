import { bookingController } from '../controllers/booking.controller.js'
import { buildCrudRouter } from '../utils/crudRouter.js'

const router = buildCrudRouter(bookingController)
router.get('/resident/:residentId', bookingController.byResident)

export default router
