import { inject, injectable } from "tsyringe";
import { ITasksRepository } from "../data/ITasksRepository";
import { ICreateTaskDTO } from "../dtos/ICreateTaskDTO";

@injectable()
class CreateTaskUserCase {
    constructor (
        @inject('TasksRepository')
        private readonly tasksRepository: ITasksRepository
    ) {}

    async execute ({
        title,
        description,
        status
    }: ICreateTaskDTO): Promise<void> {
        await this.tasksRepository.create({title, description, status})
    }
}

export { CreateTaskUserCase } 