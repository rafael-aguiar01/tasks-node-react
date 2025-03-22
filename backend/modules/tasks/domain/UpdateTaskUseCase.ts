import { inject, injectable } from "tsyringe";
import { ITasksRepository } from "../data/ITasksRepository";
import { ICreateTaskDTO } from "../dtos/ICreateTaskDTO";
import { IUpdateTaskDTO } from "../dtos/IUpdateTaskDTO";

@injectable()
class UpdateTaskUseCase {
    constructor(
        @inject('TasksRepository')
        private readonly tasksRepository: ITasksRepository
    ){}

    async execute({id, title, description, status }: IUpdateTaskDTO): Promise<void>{
        const updates: IUpdateTaskDTO ={}

        if( title ) {
            updates.title = title
        }
        if( description ) {
            updates.description = description
        }
        if(status){
            updates.status = status
        }

        if (Object.keys(updates).length > 0) {
            try {
                await this.tasksRepository.updateById(id, updates);
            } catch (error) {
                throw new Error(error)
            }
          }
    }
}

export { UpdateTaskUseCase}