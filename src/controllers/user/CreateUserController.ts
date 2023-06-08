import { Request, Response } from 'express'
import { CreateUserService } from '../../services/user/CreateUserService'

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, password } = req.body

    if (!name) {
      throw new Error('Email incorrect')
    }

    if (!email) {
      throw new Error('Email incorrect')
    }

    if (!password) {
      throw new Error('Email incorrect')
    }

    const createUserService = new CreateUserService()

    const user = await createUserService.execute({ name, email, password })

    return res.json(user)
  }
}
