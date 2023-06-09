import { Request, Response } from 'express'
import { RemoveOrderItemService } from '../../services/orderItem/RemoveOrderItemService'

export class RemoveOrderItemController {
  async handle(req: Request, res: Response) {
    const orderItemId = req.query.orderItemId as string

    if (!orderItemId || orderItemId === '') {
      throw new Error('Ordem item id is required')
    }

    const removeOrderItemService = new RemoveOrderItemService()

    const orderItem = await removeOrderItemService.execute({ orderItemId })

    return res.json(orderItem)
  }
}
