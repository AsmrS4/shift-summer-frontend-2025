import z from "zod";

export const loginSchema = z.object({
    phone: z.string().refine((val) => /^\d+$/.test(val), {
            message: 'Допустимы только цифры',
        }).nonempty({ message: 'Поле является обязательным' }),
    code: z.string().refine((val) => /^\d+$/.test(val), {
            message: 'Допустимы только цифры',
        }).max(6, {message: 'Допустимая длина 6 символов'}).min(6, {message: 'Минимальна длина 6 символов'})
})

export type Login = z.infer<typeof loginSchema>