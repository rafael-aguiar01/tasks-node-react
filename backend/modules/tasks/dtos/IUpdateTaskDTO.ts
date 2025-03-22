import { z } from 'zod';
import { updateTaskSchema } from '../schemas/TaskSchema';

export type IUpdateTaskDTO = z.infer<typeof updateTaskSchema>;

