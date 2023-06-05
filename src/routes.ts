import { Router } from 'express'

import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController'
import { isAuthenticate } from './middlewares/isAuthenticate'
import { DetailUserController } from './controllers/user/DetailUserController'

const router = Router()

// -- USER --
router.post('/register', new CreateUserController().handle)
router.post('/login', isAuthenticate, new AuthUserController().handle)
router.get('/me', isAuthenticate, new DetailUserController().handle)

export { router }
