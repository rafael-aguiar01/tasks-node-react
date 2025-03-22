import { Router } from "express"
import { CreateTaskController } from "../../../../modules/tasks/controllers/CreateTaskController"
import { UpdateTaskController } from "../../../../modules/tasks/controllers/UpdateTaskController"

const tasksRoutes = Router()

const createTaskController = new CreateTaskController()
const updateTaskController = new UpdateTaskController()

tasksRoutes.post('/', createTaskController.handle.bind(createTaskController))
tasksRoutes.put('/', updateTaskController.handle.bind(createTaskController))


export { tasksRoutes }