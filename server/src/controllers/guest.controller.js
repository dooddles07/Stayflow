import { GuestModel } from '../models/guest.model.js'
import { buildCrudController } from '../utils/crudController.js'
import { asyncHandler } from '../utils/asyncHandler.js'

export const guestController = {
  ...buildCrudController(GuestModel, 'Guest'),
  byResident: asyncHandler(async (req, res) => {
    res.json(await GuestModel.findByResident(req.params.residentId))
  }),
  checkIn: asyncHandler(async (req, res) => {
    res.json(await GuestModel.update(req.params.id, { status: 'checked-in', checkedInAt: new Date() }))
  }),
  checkOut: asyncHandler(async (req, res) => {
    res.json(await GuestModel.update(req.params.id, { status: 'checked-out', checkedOutAt: new Date() }))
  }),
}
