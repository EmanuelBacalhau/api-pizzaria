import { Request, Response, Router } from 'express'

const router = Router()

router.get('/teste', (req: Request, res: Response) => {
  throw new Error('Chegando um novo error')
})

export { router }
