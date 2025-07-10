import ActionButton from '@components/Button';
import LinearProgressBar from '@components/ProgressBar/LinearBar';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const DeliverySenderPage = () => {
    const dispatch: any = useDispatch();
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(-1);
    };
    return (
        <main className='delivery-page'>
            <div className='container'>
                <div className='inner-wrapper'>
                    <h2>Отправитель</h2>
                    <LinearProgressBar />
                    <form action=''>
                        <div className='input-wrapper'>
                            <label className='input-label'>Фамилия</label>
                            <input className={'input'} type='text' placeholder='Фамилия' />
                        </div>
                        <div className='input-wrapper'>
                            <label className='input-label'>Имя</label>
                            <input className={'input'} type='text' placeholder='Имя' />
                        </div>
                        <div className='input-wrapper'>
                            <label className='input-label'>Отчество</label>
                            <input
                                className={'input'}
                                type='text'
                                placeholder='Отчество (при наличии)'
                            />
                        </div>
                        <div className='input-wrapper'>
                            <label className='input-label'>Номер телефона</label>
                            <input className={'input'} type='number' placeholder='Телефон' />
                        </div>
                    </form>
                    <div className='buttons-wrapper'>
                        <ActionButton
                            text={'Назад'}
                            type={'submit'}
                            color='default'
                            onClick={handleNavigate}
                        />
                        <ActionButton
                            text={'Продолжить'}
                            type={'submit'}
                            color='primary'
                            onClick={() => {
                                navigate('/delivery-registration/send-from');
                            }}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default DeliverySenderPage;
