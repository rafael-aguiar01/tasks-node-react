import { PrismaClient, Task } from "@prisma/client";
import { ITasksRepository } from "../../../data/ITasksRepository";
import { ICreateTaskDTO } from "../../../dtos/ICreateTaskDTO";
import { IUpdateTaskDTO } from "../../../dtos/IUpdateTaskDTO";

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

    async updateById(id: number, data: IUpdateTaskDTO): Promise<void> {
       await prisma.task.update({
        where: { id },
        data
       })
    }

    async listAll(): Promise<Task[]> {
        return await prisma.task.findMany();
    }

    async delete(id: number): Promise<void> {
        await prisma.task.delete({
            where: { id }
        });    
    }



}

export { TasksRepository }