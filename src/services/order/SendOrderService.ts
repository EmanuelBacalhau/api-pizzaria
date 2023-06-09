import prismaClient from '../../prisma'

interface SendOrderRequest {
  orderId: string
}

export class SendOrderService {
  async execute({ orderId }: SendOrderRequest) {
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
