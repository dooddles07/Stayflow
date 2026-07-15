import { FacilityModel } from '../models/facility.model.js'
import { buildCrudController } from '../utils/crudController.js'

export const facilityController = buildCrudController(FacilityModel, 'Facility')
