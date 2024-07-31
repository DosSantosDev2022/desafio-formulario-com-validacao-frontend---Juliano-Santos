import { z } from 'zod'

export const formSchema = z.object({
  nome: z.string().min(1, 'O nome é obrigatório.'),
  telefone: z.string().min(1, 'O telefone é obrigatório.'),
  email: z
    .string()
    .email('Email precisa ser válido')
    .min(1, 'O E-mail é obrigatório'),
  cargo: z.string().min(1, 'Cargo é obrigatório'),
})

export type FormValues = z.infer<typeof formSchema>
