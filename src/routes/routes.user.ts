import { Router } from 'express'

import { isAuthenticate } from '../middlewares/isAuthenticate'
import { DetailUserController } from '../controllers/user/DetailUserController'
import { AuthUserController } from '../controllers/user/AuthUserController'
import { CreateUserController } from '../controllers/user/CreateUserController'

const routerUser = Router()

routerUser.get('/me', isAuthenticate, new DetailUserController().handle)
routerUser.post('/login', new AuthUserController().handle)
routerUser.post('/register', new CreateUserController().handle)

export { routerUser }
