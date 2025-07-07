import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import LinearProgressBar from '@components/ProgressBar/LinearBar';
import ActionButton from '@components/Button';

import expressDeliveryIcon from '@assets/express-delivery-img.svg';
import defaultDeliveryIcon from '@assets/default-delivery-img.svg';
import giftImage from '@assets/gift-small.svg';

import '../DeliveryPage.scss';
import { useNavigate } from 'react-router-dom';

const DeliveryPage = () => {
    const [deliveryType, setDeliveryType] = useState<string | null>(null);
    const [isDisabled, setIsDisabled] = useState<boolean>(true);
    const navigate = useNavigate();
    const handleDeliveryType = (e: React.MouseEvent<HTMLLIElement>) => {
        const el = e.currentTarget as HTMLElement;
        const value = el.dataset.value ?? null;
        setDeliveryType(value);

        console.log(value);
    };
    const handleNavigate = () => {
        navigate(-1);
    };

    useEffect(() => {
        document.querySelectorAll('.delivery-card').forEach((el) => {
            el.classList.remove('selected');
        });

        if (deliveryType !== null) {
            document.querySelectorAll('.delivery-card').forEach((el) => {
                if (el.getAttribute('data-value') === deliveryType) {
                    el.classList.add('selected');
                }
            });
            setIsDisabled(false);
        }
    }, [deliveryType]);

    return (
        <main className='delivery-page'>
            <div className='container'>
                <div className='inner-wrapper'>
                    <h2>Способ отправки</h2>
                    <LinearProgressBar />
                    <ul className='delivery-types'>
                        <li
                            className='delivery-card'
                            data-value={'EXPRESS'}
                            onClick={handleDeliveryType}
                        >
                            <div className='inner-wrapper'>
                                <div className='delivery-card-header'>
                                    <img src={expressDeliveryIcon} alt='plane' />
                                    <div className='text'>
                                        <p>Экспресс доставка до двери</p>
                                        <h3>780 ₽</h3>
                                    </div>
                                </div>
                                <div className='delivery-card-footer'>
                                    <p>1 рабочий день</p>
                                </div>
                            </div>
                        </li>
                        <li
                            className='delivery-card'
                            data-value={'DEFAULT'}
                            onClick={handleDeliveryType}
                        >
                            <div className='inner-wrapper'>
                                <div className='delivery-card-header'>
                                    <img src={defaultDeliveryIcon} alt='train' />
                                    <div className='text'>
                                        <p>Обычная доставка</p>
                                        <h3>325 ₽</h3>
                                    </div>
                                </div>
                                <div className='delivery-card-footer'>
                                    <p>5 рабочих дней</p>
                                </div>
                            </div>
                        </li>
                        <li className='delivery-card advertise'>
                            <div className='inner-wrapper'>
                                <div className='text'>
                                    <h2>1+1=3</h2>
                                    <p>3-я доставка в подарок!</p>
                                </div>
                                <img src={giftImage} alt='Gift image' />
                            </div>
                        </li>
                    </ul>
                    <div className='buttons-wrapper'>
                        <ActionButton
                            text={'Назад'}
                            type={'submit'}
                            color='default'
                            onClick={handleNavigate}
                        />
                        <ActionButton
                            text={'Далее'}
                            type={'submit'}
                            color='primary'
                            disabled={isDisabled}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default DeliveryPage;
