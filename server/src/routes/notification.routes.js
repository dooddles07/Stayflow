import { Router } from 'express'
import { notificationController } from '../controllers/notification.controller.js'

const router = Router()
router.get('/', notificationController.list)
router.post('/', notificationController.create)
router.post('/:id/read', notificationController.markRead)
router.delete('/:id', notificationController.remove)

export default router
