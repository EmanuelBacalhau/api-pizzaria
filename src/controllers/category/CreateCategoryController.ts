import { Request, Response } from 'express'
import { CreateCategoryService } from '../../services/category/CreateCategoryService'

export class CreateCategoryController {
  async handle(req: Request, res: Response) {
    const { name } = req.body

    if (name === '') {
      throw new Error('Name is required')
    }

    const createCategoryService = new CreateCategoryService()

    const category = await createCategoryService.execute({ name })

    return res.json(category)
  }
}
