import { Request, Response } from 'express'
import { DetailUserService } from '../../services/user/DetailUserService'

export class DetailUserController {
  async handle(req: Request, res: Response) {
    const userId: string = req.userId as string

    if (!userId) {
      throw new Error('User id is required')
    }

    const detailUserService = new DetailUserService()

    const user = await detailUserService.execute({ userId })

    return res.json(user)
  }
}
