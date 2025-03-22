
import { inject, injectable } from 'tsyringe'
import { ITasksRepository } from '../data/ITasksRepository'
import { Task } from '@prisma/client'

@injectable()
class ListTaskUseCase {
  constructor (
    @inject('TasksRepository')
    private readonly tasksRepository: ITasksRepository
  ) {}

  async execute (): Promise<Task[]> {
    try {
      const tasks = await this.tasksRepository.listAll()
      return tasks
    } catch (error) {
      throw new Error(error)
    }
  }
}

export { ListTaskUseCase }
