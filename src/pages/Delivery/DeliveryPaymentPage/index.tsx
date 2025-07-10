import ActionButton from '@components/Button';
import LinearProgressBar from '@components/ProgressBar/LinearBar';
import { Checkbox, FormControlLabel } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import helpIcon from '@assets/help.svg';

const DeliveryPaymentPage = () => {
    const dispatch: any = useDispatch();
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(-1);
    };
    return (
        <main className='delivery-page'>
            <div className='container'>
                <div className='inner-wrapper'>
                    <h2>Оплата доставки</h2>
                    <LinearProgressBar />
                    <form action=''></form>
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
                                navigate('/delivery-registration/details');
                            }}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default DeliveryPaymentPage;
