import { Request, Response } from 'express'
import { CreateOrderService } from '../../services/order/CreateOrderService'

export class CreateOrderController {
  async handle(req: Request, res: Response) {
    const { name, table } = req.body

    if (!name || name === '') {
      throw new Error('Name is required')
    }

    if (!table) {
      throw new Error('Table is required')
    }

    if (typeof table !== 'number') {
      throw new Error('Table must be a number')
    }

    const createOrderService = new CreateOrderService()

    const order = await createOrderService.execute({ name, table })

    return res.json(order)
  }
}
