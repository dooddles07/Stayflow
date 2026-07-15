import { residentController } from '../controllers/resident.controller.js'
import { buildCrudRouter } from '../utils/crudRouter.js'

export default buildCrudRouter(residentController)
