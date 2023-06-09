import { Request, Response } from 'express'
import { SendOrderService } from '../../services/order/SendOrderService'

export class SendOrderController {
  async handle(req: Request, res: Response) {
    const orderId = req.query.orderId as string

    const finishOrderService = new SendOrderService()

    const order = await finishOrderService.execute({ orderId })

    return res.json(order)
  }
}
