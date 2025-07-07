import React, { useState } from 'react';

import LinearProgressBar from '@components/ProgressBar/LinearBar';
import expressDeliveryIcon from '@assets/express-delivery-img.svg';
import defaultDeliveryIcon from '@assets/default-delivery-img.svg';
import giftImage from '@assets/gift-small.svg';

import './DeliveryPage.scss';

const DeliveryPage = () => {
    const [deliveryType, setDeliveryType] = useState<string | null>(null);
    const handleDeliveryType = (e: React.MouseEvent<HTMLLIElement>) => {
        const el = e.currentTarget as HTMLElement;
        const value = el.dataset.value ?? null;
        setDeliveryType(value);
        console.log(value);
    };
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
                </div>
            </div>
        </main>
    );
};

export default DeliveryPage;
