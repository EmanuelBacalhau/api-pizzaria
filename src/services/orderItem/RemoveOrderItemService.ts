import prismaClient from '../../prisma'

interface RemoveOrderRequest {
  orderItemId: string
}

export class RemoveOrderItemService {
  async execute({ orderItemId }: RemoveOrderRequest) {
    const orderItem = await prismaClient.orderItem.delete({
      where: {
        id: orderItemId,
      },
      select: {
        id: true,
        amount: true,
        orderId: true,
        productId: true,
      },
    })

    return orderItem
  }
}
