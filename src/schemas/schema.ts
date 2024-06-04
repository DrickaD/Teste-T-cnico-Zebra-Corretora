import { z } from "zod";

export const StateSchema = z.object({
    id: z.number().positive(),
    nome: z.string().min(1),
})
