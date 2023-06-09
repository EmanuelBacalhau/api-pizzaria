import { Request, Response } from 'express'
import { CreateOrderItemService } from '../../services/orderItem/CreateOrderItemService'

export class CreateOrderItemController {
  async handle(req: Request, res: Response) {
    const { amount, orderId, productId } = req.body

    if (!amount) {
      throw new Error('Amount is required')
    }

    if (typeof amount !== 'number') {
      throw new Error('Amount must be a number')
    }

    if (!orderId || orderId === '') {
      throw new Error('Order id is required')
    }

    if (!productId || productId === '') {
      throw new Error('Product id is required')
    }

    const createOrderItemService = new CreateOrderItemService()

    const orderItem = await createOrderItemService.execute({
      amount,
      orderId,
      productId,
    })

    return res.json(orderItem)
  }
}
