import { eventController } from '../controllers/event.controller.js'
import { buildCrudRouter } from '../utils/crudRouter.js'

const router = buildCrudRouter(eventController)
router.post('/:id/rsvp', eventController.rsvp)
router.post('/:id/rsvp/cancel', eventController.cancelRsvp)

export default router
