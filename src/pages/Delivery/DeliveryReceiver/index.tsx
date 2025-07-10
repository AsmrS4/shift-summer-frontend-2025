import ActionButton from '@components/Button';
import LinearProgressBar from '@components/ProgressBar/LinearBar';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as z from 'zod';
import { setReceiverDetails } from '@store/Delivery/CreateOrder/CreateOrderReducer';
import { useAppSelector } from '@hooks/useAppSelector';

const receiverFormSchema = z.object({
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

type Receiver = z.infer<typeof receiverFormSchema>;

const DeliveryReceiverPage = () => {
    const { receiver } = useAppSelector((state) => state.createOrderReducer.data);
    const dispatch: any = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Receiver>({
        resolver: zodResolver(receiverFormSchema),
    });
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(-1);
    };

    const onSubmit = (form: Receiver) => {
        console.log(form);
        dispatch(setReceiverDetails(form));
        navigate('/delivery-registration/sender');
    };

    return (
        <main className='delivery-page'>
            <div className='container'>
                <div className='inner-wrapper'>
                    <h2>Получатель</h2>
                    <LinearProgressBar />
                    <form action='' onSubmit={handleSubmit(onSubmit)}>
                        <div className='input-wrapper'>
                            <label className='input-label'>Фамилия</label>
                            <input
                                className={'input'}
                                type='text'
                                defaultValue={receiver.lastname}
                                placeholder='Фамилия'
                                {...register('lastname')}
                            />
                            {errors.lastname && <p className='error'>{errors.lastname.message}</p>}
                        </div>
                        <div className='input-wrapper'>
                            <label className='input-label'>Имя</label>
                            <input
                                className={'input'}
                                type='text'
                                defaultValue={receiver.firstname}
                                placeholder='Имя'
                                {...register('firstname')}
                            />
                            {errors.firstname && (
                                <p className='error'>{errors.firstname.message}</p>
                            )}
                        </div>
                        <div className='input-wrapper'>
                            <label className='input-label'>Отчество</label>
                            <input
                                className={'input'}
                                type='text'
                                defaultValue={receiver.middlename}
                                placeholder='Отчество (при наличии)'
                                {...register('middlename')}
                            />
                            {errors.middlename && (
                                <p className='error'>{errors.middlename.message}</p>
                            )}
                        </div>
                        <div className='input-wrapper'>
                            <label className='input-label'>Номер телефона</label>
                            <input
                                className={'input'}
                                type='tel'
                                defaultValue={receiver.phone}
                                placeholder='Телефон'
                                {...register('phone')}
                            />
                            {errors.phone && <p className='error'>{errors.phone.message}</p>}
                        </div>
                        <div className='buttons-wrapper'>
                            <ActionButton
                                text={'Назад'}
                                type={'button'}
                                color='default'
                                onClick={handleNavigate}
                            />
                            <ActionButton text={'Продолжить'} type={'submit'} color='primary' />
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default DeliveryReceiverPage;
