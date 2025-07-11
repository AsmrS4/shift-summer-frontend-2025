import { validate } from "@utils/index";
import z from "zod";

export const profileSchema = z.object({
    firstname: z
        .string()
        .trim()
        .min(1, { message: 'Минимальная длина 1 символ' })
        .max(60, { message: 'Максимальная длина 60 символов' })
        .nonempty({ message: 'Поле является обязательным' })
        .refine(validate, {
            message: 'Недопустимо использование одновременно латинского и кириллического алфавитов'
        }),
    middlename: z
        .string()
        .trim()
        .min(0)
        .max(60, { message: 'Максимальная длина 60 символов' })
        .refine(validate, {
            message: 'Недопустимо использование одновременно латинского и кириллического алфавитов'
        }).optional(),
    lastname: z
        .string()
        .trim()
        .min(1, { message: 'Минимальная длина 1 символ' })
        .max(60, { message: 'Максимальная длина 60 символов' })
        .nonempty({ message: 'Поле является обязательным' })
        .refine(validate, {
            message: 'Недопустимо использование одновременно латинского и кириллического алфавитов'
        }),    
    phone: z
        .string()
        .refine((val) => /^\d+$/.test(val), {
            message: 'Допустимы только цифры',
        })
        .nonempty({ message: 'Поле является обязательным' }),
    email: z.email({message: 'Некорректный формат email'}),
    city: z.string()
        .trim()
        .min(1, { message: 'Минимальная длина 1 символ' })
        .max(60, { message: 'Максимальная длина 60 символов' })
        .nonempty({ message: 'Поле является обязательным' }),

})

export type ProfileSchema = z.infer<typeof profileSchema>