import { create } from "domain";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateTaskUserCase } from "../domain/CreateTaskUseCase";
import { ZodError } from 'zod';
import { createTaskSchema } from "../schemas/TaskSchema";

class CreateTaskController {
    async handle (request: Request, response: Response): Promise<Response> {
        try {
            const parsedData = createTaskSchema.parse(request.body);
            const createTaskUseCase = container.resolve(CreateTaskUserCase);
            const task = await createTaskUseCase.execute(parsedData);
            return response.status(201).json( task );
        } catch (error) {
            if (error instanceof ZodError) {
                return response.status(400).json({ error: error.errors });
              }
              return response.status(500).json({ error: 'Erro interno do servidor' });
        }
    }
}

export { CreateTaskController }