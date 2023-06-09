import prismaClient from '../../prisma'

interface DetailOrderRequest {
  orderId: string
}

export class DetailOrderService {
  async execute({ orderId }: DetailOrderRequest) {
    const detailOrder = await prismaClient.order.findUnique({
      where: {
        id: orderId,
      },
      select: {
        id: true,
        name: true,
        table: true,
        status: true,
        draft: true,
        updatedAt: true,
        ordersItens: {
          select: {
            id: true,
            amount: true,
            product: {
              select: {
                id: true,
                name: true,
                price: true,
                description: true,
              },
            },
          },
        },
      },
    })

    return detailOrder
  }
}
