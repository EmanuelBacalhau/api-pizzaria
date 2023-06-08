import prismaClient from '../../prisma'

interface CreateProductRequest {
  categoryId: string
  name: string
  price: string
  description: string
  banner: string
}

export class CreateProductService {
  async execute({
    name,
    price,
    description,
    banner,
    categoryId,
  }: CreateProductRequest) {
    const product = await prismaClient.product.create({
      data: {
        name,
        price,
        description,
        banner,
        categoryId,
      },
      select: {
        id: true,
        categoryId: true,
        name: true,
        price: true,
        description: true,
        banner: true,
      },
    })

    return product
  }
}
