import prismaClient from '../../prisma'

interface DetailUserRequest {
  userId: string
}

export class DetailUserService {
  async execute({ userId }: DetailUserRequest) {
    const user = await prismaClient.user.findUnique({
      where: {
        id: userId,
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
