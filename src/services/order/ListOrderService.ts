import prismaClient from '../../prisma'

export class ListOrderService {
  async execute() {
    const orders = await prismaClient.order.findMany({
      where: {
        status: false,
        draft: false,
      },
      orderBy: {
        updatedAt: 'asc',
      },
      select: {
        id: true,
        name: true,
        table: true,
      },
    })

    return orders
  }
}
