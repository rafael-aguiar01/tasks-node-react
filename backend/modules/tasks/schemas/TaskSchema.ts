import { z } from 'zod';
import { TaskStatus } from '@prisma/client';

export const createTaskSchema = z.object({
    title: z.string({ required_error: 'O título é obrigatório' }).min(1, 'O título não pode estar vazio'),
    description: z.string().optional(),
    status: z.nativeEnum(TaskStatus).optional(),
}).strict()

export const updateTaskSchema = z.object({
    id: z.number().optional(),
    title: z.string().optional(),
    description: z.string().optional(),
    status: z.nativeEnum(TaskStatus).optional(),
}).strict()