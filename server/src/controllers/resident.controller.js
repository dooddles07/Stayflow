import { ResidentModel } from '../models/resident.model.js'
import { buildCrudController } from '../utils/crudController.js'

export const residentController = buildCrudController(ResidentModel, 'Resident')
