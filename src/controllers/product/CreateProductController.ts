import { Request, Response } from 'express'
import { CreateProductService } from '../../services/product/CreateProductService'

export class CreateProductController {
  async handle(req: Request, res: Response) {
    const { name, price, description, categoryId } = req.body

    if (!name || name === '') {
      throw new Error('Name is required')
    }

    if (!price || price === '') {
      throw new Error('Price is required')
    }

    if (!description || description === '') {
      throw new Error('Description is required')
    }

    if (!categoryId || categoryId === '') {
      throw new Error('Category id is required')
    }

    if (!req.file) {
      throw new Error('Banner is required')
    }

    const createProductService = new CreateProductService()

    const { filename: banner } = req.file

    const product = await createProductService.execute({
      name,
      price,
      description,
      banner,
      categoryId,
    })

    return res.json(product)
  }
}
