import ActionButton from '@components/Button';
import LinearProgressBar from '@components/ProgressBar/LinearBar';
import { decrementStep } from '@store/ProgressBar/ProgressBarReducer';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const DeliveryCreateDetailsPage = () => {
    const dispatch: any = useDispatch();
    const navigate = useNavigate();
    const handleNavigate = () => {
        dispatch(decrementStep());
        navigate(-1);
    };
    return (
        <main className='delivery-page'>
            <div className='container'>
                <div className='inner-wrapper'>
                    <h2>Проверка данных заказа</h2>
                    <LinearProgressBar />

                    <div className='buttons-wrapper'>
                        <ActionButton
                            text={'Назад'}
                            type={'submit'}
                            color='default'
                            onClick={handleNavigate}
                        />
                        <ActionButton
                            text={'Отправить'}
                            type={'submit'}
                            color='primary'
                            onClick={() => {}}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default DeliveryCreateDetailsPage;
