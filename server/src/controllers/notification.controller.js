import { NotificationModel } from '../models/notification.model.js'
import { asyncHandler } from '../utils/asyncHandler.js'

export const notificationController = {
  list: asyncHandler(async (req, res) => {
    res.json(await NotificationModel.findAll())
  }),
  create: asyncHandler(async (req, res) => {
    res.status(201).json(await NotificationModel.create(req.body))
  }),
  markRead: asyncHandler(async (req, res) => {
    res.json(await NotificationModel.markRead(req.params.id))
  }),
  remove: asyncHandler(async (req, res) => {
    await NotificationModel.remove(req.params.id)
    res.status(204).send()
  }),
}
