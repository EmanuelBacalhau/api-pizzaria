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
    if (name === '') {
      throw new Error('Name is required')
    }

    if (price === '') {
      throw new Error('Price is required')
    }

    if (description === '') {
      throw new Error('Description is required')
    }

    if (banner === '') {
      throw new Error('Banner is required')
    }

    if (categoryId === '') {
      throw new Error('Category id is required')
    }

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
