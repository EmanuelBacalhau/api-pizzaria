import { Request, Response } from 'express'
import { CreateProductService } from '../../services/product/CreateProductService'

export class CreateProductController {
  async handle(req: Request, res: Response) {
    const { name, price, description, categoryId } = req.body

    if (name === '') {
      throw new Error('Name is required')
    }

    if (price === '') {
      throw new Error('Price is required')
    }

    if (description === '') {
      throw new Error('Description is required')
    }

    if (categoryId === '') {
      throw new Error('Category id is required')
    }

    if (!req.file) {
      throw new Error('Banner is required')
    }

    const createProductService = new CreateProductService()

    const { originalname } = req.file

    const product = await createProductService.execute({
      name,
      price,
      description,
      banner: originalname,
      categoryId,
    })

    return res.json(product)
  }
}
