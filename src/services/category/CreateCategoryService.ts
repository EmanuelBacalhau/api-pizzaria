import prismaClient from '../../prisma'

interface CreateCategoryRequest {
  name: string
}

export class CreateCategoryService {
  async execute({ name }: CreateCategoryRequest) {
    const category = await prismaClient.category.create({
      data: {
        name,
      },
      select: {
        id: true,
        name: true,
      },
    })

    return category
  }
}
