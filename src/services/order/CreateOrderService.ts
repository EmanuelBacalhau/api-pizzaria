import prismaClient from '../../prisma'

interface CreateOrderRequest {
  name?: string
  table: number
}

export class CreateOrderService {
  async execute({ name, table }: CreateOrderRequest) {
    const order = await prismaClient.order.create({
      data: {
        name,
        table,
      },
      select: {
        id: true,
        name: true,
        table: true,
        status: true,
        draft: true,
      },
    })

    return order
  }
}
