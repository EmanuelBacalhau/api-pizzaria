import prismaClient from '../../prisma'

interface RemoveOrderRequest {
  orderId: string
}

export class RemoveOrderService {
  async execute({ orderId }: RemoveOrderRequest) {
    const order = await prismaClient.order.delete({
      where: {
        id: orderId,
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
