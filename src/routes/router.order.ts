import { Router } from 'express'

import { isAuthenticate } from '../middlewares/isAuthenticate'

import { CreateOrderController } from '../controllers/order/CreateOrderController'
import { DetailOrderController } from '../controllers/order/DetailOrderController'
import { FinishOrderController } from '../controllers/order/FinishOrderController'
import { ListOrderController } from '../controllers/order/ListOrderController'
import { RemoveOrderController } from '../controllers/order/RemoveOrderController'
import { SendOrderController } from '../controllers/order/SendOrderController'

const routerOrder = Router()

routerOrder.get('/orders', isAuthenticate, new ListOrderController().handle)
routerOrder.get(
  '/order/detail',
  isAuthenticate,
  new DetailOrderController().handle,
)
routerOrder.post('/order', isAuthenticate, new CreateOrderController().handle)
routerOrder.patch(
  '/order/send',
  isAuthenticate,
  new SendOrderController().handle,
)
routerOrder.patch(
  '/order/finish',
  isAuthenticate,
  new FinishOrderController().handle,
)
routerOrder.delete(
  '/order/remove',
  isAuthenticate,
  new RemoveOrderController().handle,
)

export { routerOrder }
