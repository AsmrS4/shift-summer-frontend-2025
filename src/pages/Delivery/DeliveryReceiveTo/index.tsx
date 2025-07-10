import ActionButton from '@components/Button';
import LinearProgressBar from '@components/ProgressBar/LinearBar';
import { Checkbox, FormControlLabel } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import helpIcon from '@assets/help.svg';

const DeliveryReceiveToPage = () => {
    const dispatch: any = useDispatch();
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(-1);
    };
    return (
        <main className='delivery-page'>
            <div className='container'>
                <div className='inner-wrapper'>
                    <h2>Куда доставить</h2>
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
                        <div className='checkbox-wrapper'>
                            <Checkbox />
                            <label htmlFor=''>
                                <b>Оставить заказ у двери</b>
                            </label>
                            <img src={helpIcon} alt='Help' />
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
                                navigate('/delivery-registration/payment');
                            }}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default DeliveryReceiveToPage;
