import { diningReservationController } from '../controllers/diningReservation.controller.js'
import { buildCrudRouter } from '../utils/crudRouter.js'

const router = buildCrudRouter(diningReservationController)
router.get('/resident/:residentId', diningReservationController.byResident)

export default router
