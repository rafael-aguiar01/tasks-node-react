import { Router } from "express"
import { CreateTaskController } from "../../../../modules/tasks/controllers/CreateTaskController"
import { UpdateTaskController } from "../../../../modules/tasks/controllers/UpdateTaskController"
import { ListTaskController } from "../../../../modules/tasks/controllers/ListTaskController"
import { DeleteTaskController } from "../../../../modules/tasks/controllers/DeleteTaskController"

const tasksRoutes = Router()

const createTaskController = new CreateTaskController()
const updateTaskController = new UpdateTaskController()
const listTaskController = new ListTaskController()
const deleteTaskController = new DeleteTaskController()

tasksRoutes.get('/', listTaskController.handle.bind(listTaskController))
tasksRoutes.post('/', createTaskController.handle.bind(createTaskController))
tasksRoutes.put('/', updateTaskController.handle.bind(createTaskController))
tasksRoutes.delete('/:id', deleteTaskController.handle.bind(deleteTaskController))


export { tasksRoutes }