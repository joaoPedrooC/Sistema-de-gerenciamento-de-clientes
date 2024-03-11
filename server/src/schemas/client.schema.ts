import { z } from "zod";

export const ClientCreateSchema = z.object({
  nome: z.string().max(50),
  email: z.string().email(),
  telefone: z.string().length(11),
  coordinate_x: z.number(),
  coordinate_y: z.number()
})