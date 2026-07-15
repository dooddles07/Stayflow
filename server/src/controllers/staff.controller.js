import { StaffModel } from '../models/staff.model.js'
import { buildCrudController } from '../utils/crudController.js'

export const staffController = buildCrudController(StaffModel, 'Staff member')
