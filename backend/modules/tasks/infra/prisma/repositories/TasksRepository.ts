import { PrismaClient, Task } from "@prisma/client";
import { ITasksRepository } from "../../../data/ITasksRepository";
import { ICreateTaskDTO } from "../../../dtos/ICreateTaskDTO";

const prisma = new PrismaClient()

class TasksRepository implements ITasksRepository {
    async create(data: ICreateTaskDTO): Promise<Task> {
        const task = await prisma.task.create({
            data: {
                title: data.title, 
                description: data.description ?? '',
                status: data.status ?? 'PENDING',
            }
        })

        return task
    }

}

export { TasksRepository }