import { Router } from 'express'

import { isAuthenticate } from '../middlewares/isAuthenticate'

import { CreateCategoryController } from '../controllers/category/CreateCategoryController'
import { ListCategoryController } from '../controllers/category/ListCategoryController'

const routerCategory = Router()

routerCategory.get(
  '/category',
  isAuthenticate,
  new ListCategoryController().handle,
)
routerCategory.post(
  '/category',
  isAuthenticate,
  new CreateCategoryController().handle,
)

export { routerCategory }
