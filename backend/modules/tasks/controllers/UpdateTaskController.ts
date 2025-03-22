import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateTaskUseCase } from "../domain/UpdateTaskUseCase";
import { updateTaskSchema } from "../schemas/TaskSchema";
import { ZodError } from "zod";


class UpdateTaskController {

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const parsedData = updateTaskSchema.parse(request.body);
            const updateTaskUseCase = container.resolve(UpdateTaskUseCase);
            await updateTaskUseCase.execute(parsedData);
            return response.status(201).send();
        } catch (error) {
            if (error instanceof ZodError) {
                return response.status(400).json({ error: error.errors });
              }
              return response.status(500).json({ error: 'Erro interno do servidor' });
        }
    }
}

export { UpdateTaskController }