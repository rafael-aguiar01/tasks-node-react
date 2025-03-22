import { create } from "domain";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateTaskUserCase } from "../domain/CreateTaskUseCase";

class CreateTaskController {
    async handle (request: Request, response: Response): Promise<Response> {
        const { title, description, status} = request.body
        const createTaskUserCase = container.resolve(CreateTaskUserCase)

        try {
            await createTaskUserCase.execute({
                    title, 
                    description,
                    status
            })

            return response.status(201).send()
        } catch (error) {
            return response.status(400).json({ error: error.message})
        }
    }
}

export { CreateTaskController }