import { Router } from "express"
import { CreateTaskController } from "../../../../modules/tasks/controllers/CreateTaskController"
import { UpdateTaskController } from "../../../../modules/tasks/controllers/UpdateTaskController"
import { ListTaskController } from "../../../../modules/tasks/controllers/ListTaskController"
import { DeleteTaskController } from "../../../../modules/tasks/controllers/DeleteTaskController"
import { UpdateStatusTaskController } from "../../../../modules/tasks/controllers/UpdateStatusTaskController"

const tasksRoutes = Router()

const createTaskController = new CreateTaskController()
const updateTaskController = new UpdateTaskController()
const updateTaskStatusController = new UpdateStatusTaskController()
const listTaskController = new ListTaskController()
const deleteTaskController = new DeleteTaskController()

tasksRoutes.get('/', listTaskController.handle.bind(listTaskController))
tasksRoutes.post('/', createTaskController.handle.bind(createTaskController))
tasksRoutes.put('/:id', updateTaskController.handle.bind(createTaskController))
tasksRoutes.patch('/:id', updateTaskStatusController.handle.bind(updateTaskStatusController))
tasksRoutes.delete('/:id', deleteTaskController.handle.bind(deleteTaskController))

export { tasksRoutes }