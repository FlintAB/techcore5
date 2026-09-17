import * as z from "zod"

export const loginSchema = z.object({
   email: z.email('Неверный формат email'),

   password: z.string().min(8, "Минимум 8 символов"),

})

export type LoginFormData = z.infer<typeof loginSchema>