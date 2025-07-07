import React, { useState } from 'react';

import Input from '@components/Input';
import ActionButton from '@components/Button';

import './LoginPage.scss';

const LoginPage = () => {
    const [timer, setTimer] = useState<number>(60);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
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
                        value={null}
                        onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
                            throw new Error('Function not implemented.');
                        }}
                    />
                    <Input
                        placeholder='Проверочный код'
                        type='number'
                        value={null}
                        onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
                            throw new Error('Function not implemented.');
                        }}
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
