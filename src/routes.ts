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
import { FinishOrderController } from './controllers/order/FinishOrderController'
import { RemoveOrderController } from './controllers/order/RemoveOrderController'

const router = Router()

const uploadProductPicture = multer(multerConfig.upload('productPicture'))

// -- USER --
router.post('/register', new CreateUserController().handle)
router.post('/login', new AuthUserController().handle)
router.get('/me', isAuthenticate, new DetailUserController().handle)

// -- CATEGORY --
router.post('/category', isAuthenticate, new CreateCategoryController().handle)
router.get('/category', isAuthenticate, new ListCategoryController().handle)

// -- PRODUCT --
router.post(
  '/product',
  isAuthenticate,
  uploadProductPicture.single('banner'),
  new CreateProductController().handle,
)
router.get(
  '/category/product',
  isAuthenticate,
  new ListByCategoryController().handle,
)

// -- ORDER --
router.post('/order', isAuthenticate, new CreateOrderController().handle)
router.patch(
  '/order/finish',
  isAuthenticate,
  new FinishOrderController().handle,
)
router.delete(
  '/order/remove',
  isAuthenticate,
  new RemoveOrderController().handle,
)

export { router }
