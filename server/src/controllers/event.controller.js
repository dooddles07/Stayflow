import { EventModel } from '../models/event.model.js'
import { buildCrudController } from '../utils/crudController.js'
import { asyncHandler } from '../utils/asyncHandler.js'
import { ApiError } from '../utils/ApiError.js'

export const eventController = {
  ...buildCrudController(EventModel, 'Event'),
  rsvp: asyncHandler(async (req, res) => {
    const { residentId } = req.body
    if (!residentId) throw ApiError.badRequest('residentId is required')
    const event = await EventModel.findById(req.params.id)
    if (!event) throw ApiError.notFound('Event not found')
    const rsvp = await EventModel.addAttendee(req.params.id, residentId)
    res.status(201).json(rsvp)
  }),
  cancelRsvp: asyncHandler(async (req, res) => {
    const { residentId } = req.body
    if (!residentId) throw ApiError.badRequest('residentId is required')
    await EventModel.removeAttendee(req.params.id, residentId)
    res.status(204).send()
  }),
}
