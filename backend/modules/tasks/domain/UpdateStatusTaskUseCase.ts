import { inject, injectable } from "tsyringe";
import { ITasksRepository } from "../data/ITasksRepository";

@injectable()
class UpdateStatusTaskUseCase {
    constructor(
        @inject('TasksRepository')
        private readonly tasksRepository: ITasksRepository
    ){}

    async execute(id: number): Promise<void>{
        try {
            await this.tasksRepository.updateById(id, { status: "COMPLETED" });
        } catch (error) {
            throw new Error("Erro ao atualizar status da tarefa");
        }
    }
}

export { UpdateStatusTaskUseCase}