import React, { useEffect, useRef, useState } from 'react';

import Input from '@components/Input';
import ActionButton from '@components/Button';
import { loginSchema, type Login } from './schema.config';
import './LoginPage.scss';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import axios from 'axios';

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
        console.log('here');
        console.log(form);
        return;
    };
    useEffect(() => {
        if (retryDelay > 0) {
            setTimeout(() => {
                setDelay((prev) => prev - 1);
            }, 1000);
        }
    }, [retryDelay]);

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
