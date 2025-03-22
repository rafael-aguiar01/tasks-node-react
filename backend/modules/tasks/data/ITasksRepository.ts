import { Task } from "@prisma/client";

interface ITasksRepository {
    create(data: ICreateTaskDTO): Promise<Task>
}

export { ITasksRepository }