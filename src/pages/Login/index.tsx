import React, { useState } from 'react';

import Input from '@components/Input';
import ActionButton from '@components/Button';

import './LoginPage.scss';

const LoginPage = () => {
    const [timer, setTimer] = useState<number>(60);
    const [phoneNumber, setPhoneNumber] = useState<number | null>(null);
    const [code, setCode] = useState<number | null>(null);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };
    const handlePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(e.target.valueAsNumber);
    };
    const handleCode = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCode(e.target.valueAsNumber);
    };
    return (
        <main className='login-page'>
            <div className='inner-wrapper'>
                <h2>Авторизация</h2>
                <p className='form-title'>Введите номер телефона для входа в личный кабинет</p>
                <form className='form' onSubmit={handleSubmit}>
                    <Input
                        placeholder='Номер телефона'
                        type='number'
                        value={phoneNumber}
                        onChange={handlePhoneNumber}
                    />
                    <Input
                        placeholder='Проверочный код'
                        type='number'
                        value={code}
                        onChange={handleCode}
                    />
                    <div className='button-wrapper'>
                        <ActionButton text={'Продолжить'} type={'submit'} color='primary' />
                        <p>Запросить код повторно можно через {timer} секунд</p>
                        <span>Отправить ещё раз</span>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default LoginPage;
