import { inject, injectable } from "tsyringe";
import { ITasksRepository } from "../data/ITasksRepository";
import { ICreateTaskDTO } from "../dtos/ICreateTaskDTO";

@injectable()
class DeleteTaskUseCase {
    constructor (
        @inject('TasksRepository')
        private readonly tasksRepository: ITasksRepository
    ) {}

    async execute (id: number): Promise<void> {
        try {
            await this.tasksRepository.delete(id)
        } catch (error) {
            throw new Error(error)
        }
    }
}

export { DeleteTaskUseCase } 