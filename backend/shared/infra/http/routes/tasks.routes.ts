import { Router } from "express"
import { CreateTaskController } from "../../../../modules/tasks/controllers/CreateTaskController"
import { UpdateTaskController } from "../../../../modules/tasks/controllers/UpdateTaskController"
import { ListTaskController } from "../../../../modules/tasks/controllers/ListTaskController"

const tasksRoutes = Router()

const createTaskController = new CreateTaskController()
const updateTaskController = new UpdateTaskController()
const listTaskController = new ListTaskController()

tasksRoutes.get('/', listTaskController.handle.bind(listTaskController))
tasksRoutes.post('/', createTaskController.handle.bind(createTaskController))
tasksRoutes.put('/', updateTaskController.handle.bind(createTaskController))


export { tasksRoutes }