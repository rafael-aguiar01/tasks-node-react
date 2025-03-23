import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateStatusTaskUseCase } from "../domain/UpdateStatusTaskUseCase";

class UpdateStatusTaskController {

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const id = Number(request.params.id)

            if (isNaN(id)) {
                return response.status(400).json({ error: "ID inválido" });
            }

            const updateStatusTaskUseCase = container.resolve(UpdateStatusTaskUseCase);
            await updateStatusTaskUseCase.execute(id);
            return response.status(200).send();
        } catch (error) {
            return response.status(400).json({ error: error.errors });
        }
    }
}

export { UpdateStatusTaskController }