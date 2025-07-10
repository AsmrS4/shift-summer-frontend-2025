import ActionButton from '@components/Button';
import LinearProgressBar from '@components/ProgressBar/LinearBar';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const DeliverySendFromPage = () => {
    const dispatch: any = useDispatch();
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(-1);
    };
    return (
        <main className='delivery-page'>
            <div className='container'>
                <div className='inner-wrapper'>
                    <h2>Откуда забрать</h2>
                    <LinearProgressBar />
                    <form action=''>
                        <div className='input-wrapper'>
                            <label className='input-label'>Улица</label>
                            <input className={'input'} type='text' placeholder='Улица' />
                        </div>
                        <div className='input-wrapper'>
                            <label className='input-label'>Номер дома</label>
                            <input className={'input'} type='text' placeholder='Дом' />
                        </div>
                        <div className='input-wrapper'>
                            <label className='input-label'>Номер квартиры</label>
                            <input className={'input'} type='text' placeholder='Квартира' />
                        </div>
                        <div className='input-wrapper'>
                            <label className='input-label'>Заметка</label>
                            <input
                                className={'input'}
                                type='text'
                                placeholder='Заметка для курьера'
                            />
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
                                navigate('/delivery-registration/receive-to');
                            }}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default DeliverySendFromPage;
