import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { DeleteTaskUseCase } from '../domain/DeleteTaskUseCase'

class DeleteTaskController {
  async handle (request: Request, response: Response): Promise<Response> {
    const id  = Number(request.params.id)
    const deleteTaskUseCase = container.resolve(DeleteTaskUseCase)

    try {
      const tasks = await deleteTaskUseCase.execute(id)
      return response.status(200).json({ tasks })
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }
}

export { DeleteTaskController }
