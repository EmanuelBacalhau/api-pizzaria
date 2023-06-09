import { Router } from 'express'

import { isAuthenticate } from '../middlewares/isAuthenticate'

import { CreateOrderItemController } from '../controllers/orderItem/CreateOrderItemController'
import { RemoveOrderItemController } from '../controllers/orderItem/RemoveOrderItemController'

const routerOrderItem = Router()

routerOrderItem.post(
  '/orderItem',
  isAuthenticate,
  new CreateOrderItemController().handle,
)
routerOrderItem.delete(
  '/orderItem/remove',
  isAuthenticate,
  new RemoveOrderItemController().handle,
)

export { routerOrderItem }
