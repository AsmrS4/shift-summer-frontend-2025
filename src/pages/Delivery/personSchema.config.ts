import * as z from 'zod';

export const receiverFormSchema = z.object({
    firstname: z
        .string()
        .trim()
        .min(1, { message: 'Минимальная длина 1 символ' })
        .max(60, { message: 'Максимальная длина 60 символов' })
        .nonempty({ message: 'Поле обязательно для заполнения' }),
    middlename: z
        .string()
        .trim()
        .min(0)
        .max(60, { message: 'Максимальная длина 60 символов' })
        .optional(),
    lastname: z
        .string()
        .trim()
        .min(1, { message: 'Минимальная длина 1 символ' })
        .max(60, { message: 'Максимальная длина 60 символов' })
        .nonempty({ message: 'Поле обязательно для заполнения' }),
    phone: z.string().refine((val) => /^\d+$/.test(val), {
        message: 'Допустимы только цифры',
    }),
});

export type Receiver = z.infer<typeof receiverFormSchema>;