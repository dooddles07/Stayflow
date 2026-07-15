import { Router } from 'express'

export const buildCrudRouter = (controller) => {
  const router = Router()
  router.get('/', controller.list)
  router.get('/:id', controller.getOne)
  router.post('/', controller.create)
  router.put('/:id', controller.update)
  router.delete('/:id', controller.remove)
  return router
}
