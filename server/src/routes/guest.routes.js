import { guestController } from '../controllers/guest.controller.js'
import { buildCrudRouter } from '../utils/crudRouter.js'

const router = buildCrudRouter(guestController)
router.get('/resident/:residentId', guestController.byResident)
router.post('/:id/check-in', guestController.checkIn)
router.post('/:id/check-out', guestController.checkOut)

export default router
