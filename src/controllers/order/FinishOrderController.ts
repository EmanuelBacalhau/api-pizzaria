import { Request, Response } from 'express'
import { FinishOrderService } from '../../services/order/FinishOrderService'

export class FinishOrderController {
  async handle(req: Request, res: Response) {
    const orderId = req.query.orderId as string

    if (!orderId || orderId === '') {
      throw new Error('Order id is required')
    }

    const finishOrderService = new FinishOrderService()

    const order = await finishOrderService.execute({ orderId })

    return res.json(order)
  }
}
