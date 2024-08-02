import { z } from 'zod'

// Regex para validação de email
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Regex para validação de telefone
const regexTelefone = /^[0-9+\-\s()]*$/

export const formSchema = z.object({
  nome: z.string().min(1, 'O nome é obrigatório.'),
  telefone: z.string().refine((value) => regexTelefone.test(value), {
    message:
      'O telefone deve conter apenas números e símbolos válidos (+, -, (), espaço)',
  }),
  email: z.string().refine((value) => regexEmail.test(value), {
    message: 'Email inválido, tente novamente!',
  }),

  cargo: z.string().min(1, 'Cargo é obrigatório'),
})

export type FormValues = z.infer<typeof formSchema>
