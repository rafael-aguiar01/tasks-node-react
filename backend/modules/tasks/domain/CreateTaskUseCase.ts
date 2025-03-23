import { inject, injectable } from "tsyringe";
import { ITasksRepository } from "../data/ITasksRepository";
import { ICreateTaskDTO } from "../dtos/ICreateTaskDTO";
import { Task } from "@prisma/client";

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
    }: ICreateTaskDTO): Promise<Task> {
        const task = await this.tasksRepository.create({title, description, status})
        return task
    }
}

export { CreateTaskUserCase } 