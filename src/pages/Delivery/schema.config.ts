import * as z from 'zod';

const validate = (val: string) => {
  const hasLatin = /[A-Za-z]/.test(val);
  const hasCyrillic = /[А-Яа-яЁё]/.test(val);

  return !(hasLatin && hasCyrillic);
};

export const addressFormSchema = z.object({
    street: z
        .string()
        .trim()
        .min(1, { message: 'Минимальная длина 1 символ' })
        .max(100, { message: 'Максимальная длина 100 символов' })
        .nonempty({ message: 'Поле является обязательным' }),
    house: z
        .string()
        .trim()
        .min(1, { message: 'Минимальная длина 1 символ' })
        .max(100, { message: 'Максимальная длина 100 символов' })
        .nonempty({ message: 'Поле является обязательным' }),
    apartment: z
        .string()
        .trim()
        .min(0)
        .max(100, { message: 'Максимальная длина 100 символов' }),
    comment: z
        .string()
        .trim()
        .min(0)
        .max(300, { message: 'Максимальная длина 300 символов' })

})

export const receiverFormSchema = z.object({
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
    phone: z.string().refine((val) => /^\d+$/.test(val), {
        message: 'Допустимы только цифры',
    }).nonempty({ message: 'Поле является обязательным' }),
});

export type Receiver = z.infer<typeof receiverFormSchema>;
export type Address = z.infer<typeof addressFormSchema>;