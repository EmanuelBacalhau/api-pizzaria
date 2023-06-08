import { Request, Response } from 'express'
import { ListByCategoryService } from '../../services/product/ListByCategoryService'

export class ListByCategoryController {
  async handle(req: Request, res: Response) {
    const categoryId: string = req.query.categoryId as string

    const listByCategoryService = new ListByCategoryService()

    const products = await listByCategoryService.execute({ categoryId })

    return res.json(products)
  }
}
