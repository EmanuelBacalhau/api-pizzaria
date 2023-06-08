import { Request, Response } from 'express'
import { AuthUserService } from '../../services/user/AuthUserService'

export class AuthUserController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body

    if (!email) {
      throw new Error('Email is required')
    }

    if (!password) {
      throw new Error('Password is required')
    }

    const authUserService = new AuthUserService()

    const auth = await authUserService.execute({ email, password })

    return res.json(auth)
  }
}
