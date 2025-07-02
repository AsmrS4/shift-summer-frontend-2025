import React from 'react';
import './Home.scss';
import { Box } from '@mui/material';
import box from '@assets/package-open.svg';
import qr from '@assets/QR_koronapay.svg';
import bgImage from '@assets/bg-image.svg';
import ActionButton from '@components/Button';
const HomePage = () => {
    return (
        <main className='home-page'>
            <div className='container'>
                <section className='home-page__header'>
                    <div>
                        <h1 className='home-page__title'>Мы доставим ваш заказ</h1>
                        <h2 className='home-page__subtitle'>
                            Отправляйте посылки в приложении Шифт Delivery
                        </h2>
                    </div>
                    <Box className={'box'}>
                        <img src={box} alt='box' />
                        <img src={qr} alt='QR-code' />
                        <span>{'Наведите камеру телефона\nна QR-код'}</span>
                    </Box>
                    <img className='home-page__image' src={bgImage} alt='Delivery Box ' />
                </section>
                <section className='home-page__body'>
                    <div className='inner-wrapper'>
                        <Box className={'box calculator'}>
                            <h2 className='calculator__title'>Рассчитать доставку</h2>
                            <div className='input-wrapper'></div>
                            <ActionButton text={'Рассчитать'} type={'button'} disabled={false} />
                        </Box>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default HomePage;
