import { inject, injectable } from "tsyringe";
import { ITasksRepository } from "../data/ITasksRepository";

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