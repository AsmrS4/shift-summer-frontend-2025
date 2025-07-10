import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import ActionButton from '@components/Button';
import LinearProgressBar from '@components/ProgressBar/LinearBar';
import { setPayer } from '@store/Delivery/CreateOrder/CreateOrderReducer';
import { decrementStep, incrementStep } from '@store/ProgressBar/ProgressBarReducer';

const DeliveryPaymentPage = () => {
    const dispatch: any = useDispatch();
    const [payer, setPayerValue] = React.useState('RECEIVER');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPayerValue((event.target as HTMLInputElement).value);
    };
    const navigate = useNavigate();
    const handleNavigate = () => {
        dispatch(decrementStep());
        navigate(-1);
    };
    const handleClick = () => {
        dispatch(setPayer(payer));
        dispatch(incrementStep());
        navigate('/delivery-registration/details');
    };

    return (
        <main className='delivery-page'>
            <div className='container'>
                <div className='inner-wrapper'>
                    <h2>Оплата доставки</h2>
                    <LinearProgressBar />
                    <form action=''>
                        <RadioGroup
                            aria-labelledby='demo-controlled-radio-buttons-group'
                            name='controlled-radio-buttons-group'
                            value={payer}
                            onChange={handleChange}
                        >
                            <FormControlLabel
                                value='RECEIVER'
                                control={<Radio checkedIcon={<CheckCircleIcon />} />}
                                label='Получатель'
                            />
                            <FormControlLabel
                                value='SENDER'
                                control={<Radio checkedIcon={<CheckCircleIcon />} />}
                                label='Отправитель'
                            />
                        </RadioGroup>
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
                            onClick={handleClick}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default DeliveryPaymentPage;
