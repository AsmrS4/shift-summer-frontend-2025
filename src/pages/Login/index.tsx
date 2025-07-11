import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';

import ActionButton from '@components/Button';
import { authorizeUser } from '@store/Session/SessionCreator';
import { useAppSelector } from '@hooks/useAppSelector';

import { loginSchema, type Login } from './schema.config';
import './LoginPage.scss';

const LoginPage = () => {
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm<Login>({
        resolver: zodResolver(loginSchema),
    });

    const [hidden, setIsHidden] = useState<boolean>(true);
    const [buttonText, setText] = useState<string>('Продолжить');
    const [retryDelay, setDelay] = useState<number>(0);
    const { error, isAuth } = useAppSelector((state) => state.sessionReducer);

    const dispatch: any = useDispatch();
    const navigate = useNavigate();

    const sendPhoneNumber = async (phone: string) => {
        try {
            const response = await axios.post('https://shift-intensive.ru/api/auth/otp', {
                phone: phone,
            });
            return response.data;
        } catch (error) {}
    };
    const handleClick = async () => {
        const phone = getValues('phone');
        if (phone == '') {
            return;
        }
        const result = await sendPhoneNumber(phone);
        if (result) {
            setDelay(Math.trunc(result.retryDelay / 1000));
        }
        setIsHidden(false);
        setText('Отправить');
    };

    const onSubmit = (form: Login) => {
        try {
            dispatch(authorizeUser(form));
        } catch (error) {
            console.log(error);
        }
        return;
    };
    useEffect(() => {
        if (retryDelay > 0) {
            setTimeout(() => {
                setDelay((prev) => prev - 1);
            }, 1000);
        }
    }, [retryDelay]);
    useEffect(() => {
        if (isAuth) {
            navigate('/');
        }
    }, [isAuth]);
    return (
        <main className='login-page'>
            <div className='inner-wrapper'>
                <h2>Авторизация</h2>
                <p className='form-title'>Введите номер телефона для входа в личный кабинет</p>
                <form className='form' onSubmit={handleSubmit(onSubmit)}>
                    <div className='input-wrapper'>
                        <input
                            className={'input'}
                            type='text'
                            placeholder='Телефон'
                            {...register('phone')}
                        />
                        {errors.phone && <p className='error'>{errors.phone.message}</p>}
                    </div>
                    {!hidden && (
                        <div className='input-wrapper'>
                            <input
                                className={'input'}
                                type='text'
                                placeholder='Проверочный код'
                                {...register('code')}
                            />
                            {errors.code && <p className='error'>{errors.code.message}</p>}
                        </div>
                    )}
                    <div className='button-wrapper'>
                        {hidden && (
                            <ActionButton
                                text={buttonText}
                                type={'button'}
                                color='primary'
                                onClick={handleClick}
                            />
                        )}
                        {!hidden && (
                            <ActionButton text={buttonText} type={'submit'} color='primary' />
                        )}
                        {error && <h4 className='error-message'>{error}</h4>}
                        {retryDelay > 0 && (
                            <p>Запросить код повторно можно через {retryDelay} секунд</p>
                        )}
                        {retryDelay <= 0 && !hidden && (
                            <span onClick={handleClick}>Отправить ещё раз</span>
                        )}
                    </div>
                </form>
            </div>
        </main>
    );
};

export default LoginPage;
