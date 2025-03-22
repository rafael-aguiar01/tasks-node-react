import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListTaskUseCase } from '../domain/ListTaskUseCase'

class ListTaskController {
  async handle (request: Request, response: Response): Promise<Response> {
    const listTaskUseCase = container.resolve(ListTaskUseCase)

    try {
      const tasks = await listTaskUseCase.execute()
      return response.status(200).json({ tasks })
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }
}

export { ListTaskController }
