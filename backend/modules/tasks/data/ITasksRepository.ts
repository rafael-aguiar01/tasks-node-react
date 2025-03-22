import { Task } from "@prisma/client";
import { ICreateTaskDTO } from "../dtos/ICreateTaskDTO";

interface ITasksRepository {
    create(data: ICreateTaskDTO): Promise<Task>
}

export { ITasksRepository }