import { Router } from 'express'

import multer from 'multer'
import { multerConfig } from './config/multer'

import { isAuthenticate } from './middlewares/isAuthenticate'

import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController'
import { DetailUserController } from './controllers/user/DetailUserController'
import { CreateCategoryController } from './controllers/category/CreateCategoryController'
import { ListCategoryController } from './controllers/category/ListCategoryController'
import { CreateProductController } from './controllers/product/CreateProductController'
import { ListByCategoryController } from './controllers/product/ListByCategoryController'
import { CreateOrderController } from './controllers/order/CreateOrderController'
import { SendOrderController } from './controllers/order/SendOrderController'
import { RemoveOrderController } from './controllers/order/RemoveOrderController'
import { CreateOrderItemController } from './controllers/orderItem/CreateOrderItemController'
import { RemoveOrderItemController } from './controllers/orderItem/RemoveOrderItemController'
import { ListOrderController } from './controllers/order/ListOrderController'
import { DetailOrderController } from './controllers/order/DetailOrderController'
import { FinishOrderController } from './controllers/order/FinishOrderController'

const router = Router()

const uploadProductPicture = multer(multerConfig.upload('productPicture'))

// -- USER --
router.get('/me', isAuthenticate, new DetailUserController().handle)
router.post('/login', new AuthUserController().handle)
router.post('/register', new CreateUserController().handle)

// -- CATEGORY --
router.get('/category', isAuthenticate, new ListCategoryController().handle)
router.post('/category', isAuthenticate, new CreateCategoryController().handle)

// -- PRODUCT --
router.get(
  '/category/products',
  isAuthenticate,
  new ListByCategoryController().handle,
)
router.post(
  '/product',
  isAuthenticate,
  uploadProductPicture.single('banner'),
  new CreateProductController().handle,
)

// -- ORDER --
router.get('/orders', isAuthenticate, new ListOrderController().handle)
router.post('/order', isAuthenticate, new CreateOrderController().handle)
router.patch('/order/send', isAuthenticate, new SendOrderController().handle)
router.delete(
  '/order/remove',
  isAuthenticate,
  new RemoveOrderController().handle,
)
router.get('/order/detail', isAuthenticate, new DetailOrderController().handle)
router.patch(
  '/order/finish',
  isAuthenticate,
  new FinishOrderController().handle,
)

// -- ORDER ITEM --
router.post(
  '/orderItem',
  isAuthenticate,
  new CreateOrderItemController().handle,
)
router.delete(
  '/orderItem/remove',
  isAuthenticate,
  new RemoveOrderItemController().handle,
)

export { router }
