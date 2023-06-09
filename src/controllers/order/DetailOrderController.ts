import { Request, Response } from 'express'
import { DetailOrderService } from '../../services/order/DetailOrderService'

export class DetailOrderController {
  async handle(req: Request, res: Response) {
    const orderId = req.query.orderId as string

    if (!orderId || orderId === '') {
      throw new Error('Order id is required')
    }

    const detailOrderService = new DetailOrderService()

    const detailOrder = await detailOrderService.execute({ orderId })

    return res.json(detailOrder)
  }
}
