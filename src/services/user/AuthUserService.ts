import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import prismaClient from '../../prisma'

interface AuthUserRequest {
  email: string
  password: string
}

export class AuthUserService {
  async execute({ email, password }: AuthUserRequest) {
    const user = await prismaClient.user.findUnique({
      where: {
        email,
      },
    })

    if (!user) {
      throw new Error('Email/Password incorrect')
    }

    const passwordMatch: boolean = await compare(password, user.password)

    if (!passwordMatch) {
      throw new Error('Email/Password incorrect')
    }

    const JWT_SECRET: string = process.env.JWT_SECRET as string

    const token: string = sign(
      {
        name: user.name,
        email: user.email,
      },
      JWT_SECRET,
      {
        subject: user.id,
        expiresIn: '30d',
      },
    )

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token,
    }
  }
}
