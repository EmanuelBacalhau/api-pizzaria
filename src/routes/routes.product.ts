import { Router } from 'express'

import { isAuthenticate } from '../middlewares/isAuthenticate'

import multer from 'multer'
import { multerConfig } from '../config/multer'

import { CreateProductController } from '../controllers/product/CreateProductController'
import { ListByCategoryController } from '../controllers/product/ListByCategoryController'

const routerProduct = Router()

const uploadProductPicture = multer(multerConfig.upload('productPicture'))

routerProduct.get(
  '/category/products',
  isAuthenticate,
  new ListByCategoryController().handle,
)
routerProduct.post(
  '/product',
  isAuthenticate,
  uploadProductPicture.single('banner'),
  new CreateProductController().handle,
)

export { routerProduct }
