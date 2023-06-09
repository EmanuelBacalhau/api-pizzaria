import prismaClient from '../../prisma'

interface OrderItemRequest {
  amount: number
  orderId: string
  productId: string
}

export class CreateOrderItemService {
  async execute({ amount, orderId, productId }: OrderItemRequest) {
    const orderItem = await prismaClient.orderItem.create({
      data: {
        amount,
        orderId,
        productId,
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
