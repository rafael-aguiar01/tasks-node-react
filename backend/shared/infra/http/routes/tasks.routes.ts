import { Router } from "express"
import { CreateTaskController } from "../../../../modules/tasks/controllers/CreateTaskController"

const tasksRoutes = Router()

const createTaskController = new CreateTaskController()

tasksRoutes.post('/', createTaskController.handle.bind(createTaskController))

export { tasksRoutes }