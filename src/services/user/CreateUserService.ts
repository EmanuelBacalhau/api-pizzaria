import { hash } from 'bcryptjs'
import prismaClient from '../../prisma'

interface CreateUserRequest {
  name: string
  email: string
  password: string
}

export class CreateUserService {
  async execute({ name, email, password }: CreateUserRequest) {
    const userAlreadyExists = await prismaClient.user.findUnique({
      where: {
        email,
      },
    })

    if (userAlreadyExists) {
      throw new Error('User already exists')
    }

    const salt: number = 8
    const passwordHash: string = await hash(password, salt)

    const user = await prismaClient.user.create({
      data: {
        name,
        email,
        password: passwordHash,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    })

    return user
  }
}
