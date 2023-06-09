import prismaClient from '../../prisma'

interface FinishOrderRequest {
  orderId: string
}

export class FinishOrderService {
  async execute({ orderId }: FinishOrderRequest) {
    const order = await prismaClient.order.update({
      where: {
        id: orderId,
      },
      data: {
        draft: false,
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
