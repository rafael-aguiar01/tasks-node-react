import { PrismaClient, Task } from "@prisma/client";
import { ITasksRepository } from "../../../data/ITasksRepository";

const prisma = new PrismaClient()

class TasksRepository implements ITasksRepository {
    async create(data: ICreateTaskDTO): Promise<Task> {
        const task = await prisma.task.create({
            data,
        })

        return task
    }

}

export { TasksRepository }