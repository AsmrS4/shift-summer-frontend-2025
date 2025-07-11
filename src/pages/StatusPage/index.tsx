import React from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import DoneIcon from '@mui/icons-material/Done';
import './StatusPage.scss';
import ActionButton from '@components/Button';
import { useNavigate } from 'react-router-dom';

export const SuccessCreatedOrderPage = () => {
    const navigate = useNavigate();
    return (
        <main className='status-page'>
            <div className='container'>
                <div className='inner-wrapper'>
                    <header className='status-header'>
                        <div className='status-icon'>
                            <DoneIcon sx={{ width: 24, height: 24 }} />
                        </div>
                        <h2>Заявка отправлена</h2>
                    </header>
                    <p className='status-subtext'>
                        Вы можете оплатить ваш заказ в разделе
                        <br />
                        «Профиль»
                    </p>
                    <div className='order-card'>
                        <div className='item'>
                            <label></label>
                            <p></p>
                        </div>
                        <div className='item'>
                            <label></label>
                            <p></p>
                        </div>
                        <div className='item'>
                            <label></label>
                            <p></p>
                        </div>
                        <div className='item'>
                            <label></label>
                            <p></p>
                        </div>
                        <div className='item'>
                            <p>Вся информация была продублирована в SMS</p>
                        </div>
                    </div>
                    <div className='buttons-wrapper'>
                        <ActionButton
                            text={'Посмотреть статус'}
                            type={'button'}
                            onClick={() => {
                                navigate('/');
                            }}
                        />
                        <ActionButton
                            text={'На главную'}
                            type={'button'}
                            color='primary'
                            onClick={() => {
                                navigate('/');
                            }}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
};

export const ErrorCreatedOrderPage = () => {
    const navigate = useNavigate();
    return (
        <main className='status-page'>
            <div className='container'>
                <div className='inner-wrapper'>
                    <header className='status-header'>
                        <div className='status-icon error'>
                            <ClearIcon sx={{ width: 24, height: 24 }} />
                        </div>
                        <h2>Не удалось создать заявку</h2>
                    </header>
                    <p className='status-subtext'>
                        Что-то пошло не так. <br />
                        Пожалуйста, проверьте что все данные были введены правильно
                    </p>

                    <div className='buttons-wrapper'>
                        <ActionButton
                            text={'Посмотреть статус'}
                            type={'button'}
                            onClick={() => {
                                navigate('/');
                            }}
                        />
                        <ActionButton
                            text={'На главную'}
                            type={'button'}
                            color='primary'
                            onClick={() => {
                                navigate('/');
                            }}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
};
