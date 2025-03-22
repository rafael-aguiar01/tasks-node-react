import { z } from 'zod';
import { createTaskSchema } from '../schemas/createTaskSchema';

export type ICreateTaskDTO = z.infer<typeof createTaskSchema>;

