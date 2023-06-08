import prismaClient from '../../prisma'

interface ProductByCategoryRequest {
  categoryId: string
}

export class ListByCategoryService {
  async execute({ categoryId }: ProductByCategoryRequest) {
    const productsByCategoryId = await prismaClient.product.findMany({
      where: {
        categoryId,
      },
      select: {
        id: true,
        name: true,
        price: true,
        description: true,
        banner: true,
      },
    })

    return productsByCategoryId
  }
}
