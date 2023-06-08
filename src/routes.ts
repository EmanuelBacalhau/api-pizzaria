import { Router } from 'express'

import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController'
import { isAuthenticate } from './middlewares/isAuthenticate'
import { DetailUserController } from './controllers/user/DetailUserController'
import { CreateCategoryController } from './controllers/category/CreateCategoryController'

const router = Router()

// -- USER --
router.post('/register', new CreateUserController().handle)
router.post('/login', isAuthenticate, new AuthUserController().handle)
router.get('/me', isAuthenticate, new DetailUserController().handle)

// -- CATEGORY --
router.post('/category', isAuthenticate, new CreateCategoryController().handle)

export { router }
