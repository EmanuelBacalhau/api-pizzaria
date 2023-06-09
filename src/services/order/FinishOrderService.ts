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
        status: true,
      },
      select: {
        id: true,
        table: true,
        name: true,
        status: true,
        draft: true,
      },
    })

    return order
  }
}
