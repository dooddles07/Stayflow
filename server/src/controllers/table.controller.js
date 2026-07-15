import { TableModel } from '../models/table.model.js'
import { buildCrudController } from '../utils/crudController.js'
import { asyncHandler } from '../utils/asyncHandler.js'

export const tableController = {
  ...buildCrudController(TableModel, 'Table'),
  byRestaurant: asyncHandler(async (req, res) => {
    res.json(await TableModel.findByRestaurant(req.params.restaurantId))
  }),
}
