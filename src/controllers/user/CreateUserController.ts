import { Request, Response } from 'express'
import { CreateUserService } from '../../services/user/CreateUserService'

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, password } = req.body

    if (!name) {
      throw new Error('Name is required')
    }

    if (!email) {
      throw new Error('Email is required')
    }

    if (!password) {
      throw new Error('Password is required')
    }

    const createUserService = new CreateUserService()

    const user = await createUserService.execute({ name, email, password })

    return res.json(user)
  }
}
