import { z } from "zod";

export const CreateClientSchema = z.object({
  nome: z.string().min(1, 'O nome deve ter no mínimo 1 caractere').max(50, 'O nome deve conter no máximo 50 caracteres'),
  email: z.string().email('E-mail inválido'),
  telefone: z.string().length(11, 'O número de telefone deve ter 11 dígitos'),
  coordinate_x: z.string().min(1, 'A coordenada deve ter no mínimo 1 dígito').regex(/^[1-9]\d*(\.\d+)?$/, 'A coordenada deve conter apenas números'),
  coordinate_y: z.string().min(1, 'A coordenada deve ter no mínimo 1 dígito').regex(/^[1-9]\d*(\.\d+)?$/, 'A coordenada deve conter apenas números')
})