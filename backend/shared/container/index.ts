import { container } from "tsyringe";
import { ITasksRepository } from "../../modules/tasks/data/ITasksRepository";
import { TasksRepository } from "../../modules/tasks/infra/prisma/repositories/TasksRepository";

container.registerSingleton<ITasksRepository>(
    'TasksRepository',
    TasksRepository
  );