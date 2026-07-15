import { DiningReservationModel } from '../models/diningReservation.model.js'
import { buildCrudController } from '../utils/crudController.js'
import { asyncHandler } from '../utils/asyncHandler.js'

export const diningReservationController = {
  ...buildCrudController(DiningReservationModel, 'Dining reservation'),
  byResident: asyncHandler(async (req, res) => {
    res.json(await DiningReservationModel.findByResident(req.params.residentId))
  }),
}
