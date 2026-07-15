import { RestaurantModel } from '../models/restaurant.model.js'
import { buildCrudController } from '../utils/crudController.js'

export const restaurantController = buildCrudController(RestaurantModel, 'Restaurant')
