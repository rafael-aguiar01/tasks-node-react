import { Task } from "@prisma/client";
import { ICreateTaskDTO } from "../dtos/ICreateTaskDTO";
import { IUpdateTaskDTO } from "../dtos/IUpdateTaskDTO";

interface ITasksRepository {
    create(data: ICreateTaskDTO): Promise<Task>
    updateById(id: number, updates: IUpdateTaskDTO): Promise<void>
    listAll(): Promise<Task[]>
    delete(id: number):Promise<void>
}

export { ITasksRepository }