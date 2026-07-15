import { BookingModel } from '../models/booking.model.js'
import { buildCrudController } from '../utils/crudController.js'
import { asyncHandler } from '../utils/asyncHandler.js'

export const bookingController = {
  ...buildCrudController(BookingModel, 'Booking'),
  byResident: asyncHandler(async (req, res) => {
    res.json(await BookingModel.findByResident(req.params.residentId))
  }),
}
