import React from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import ActionButton from '@components/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import './ErrorPage.scss';
const errors = {
    404: 'Страница не найдена',
    500: 'Ошибка сервера',
};

export const ErrorPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <main className='error-page'>
            <div className='container'>
                <div className='inner-wrapper'>
                    <header className='status-header'>
                        <div className='status-icon error'>
                            <ClearIcon sx={{ width: 24, height: 24 }} />
                        </div>
                        <h1>Страница не найдена</h1>
                    </header>
                    <p className='status-subtext'>
                        По запросу {location.pathname} ничего не найдено
                    </p>
                    <div className='buttons-wrapper'>
                        <ActionButton
                            text={'Назад'}
                            type={'button'}
                            onClick={() => {
                                navigate(-1);
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

export const ServerErrorPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <main className='error-page'>
            <div className='container'>
                <div className='inner-wrapper'>
                    <header className='status-header'>
                        <div className='status-icon error'>
                            <ClearIcon sx={{ width: 24, height: 24 }} />
                        </div>
                        <h1>Ошибка сервера</h1>
                    </header>
                    <p className='status-subtext'>
                        Не удалось обработать запрос. Попробуйте обратиться позднее
                    </p>
                    <div className='buttons-wrapper'>
                        <ActionButton
                            text={'Назад'}
                            type={'button'}
                            onClick={() => {
                                navigate(-1);
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
