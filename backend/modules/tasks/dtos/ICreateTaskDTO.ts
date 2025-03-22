import { z } from 'zod';
import { createTaskSchema } from '../schemas/TaskSchema';

export type ICreateTaskDTO = z.infer<typeof createTaskSchema>;

