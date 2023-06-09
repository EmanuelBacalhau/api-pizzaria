import { Router } from 'express'

import { routerCategory } from './routes.category'
import { routerUser } from './routes.user'
import { routerProduct } from './routes.product'
import { routerOrder } from './router.order'
import { routerOrderItem } from './routes.orderItem'

const router = Router()

router.use(routerUser)
router.use(routerCategory)
router.use(routerProduct)
router.use(routerOrder)
router.use(routerOrderItem)

export { router }
