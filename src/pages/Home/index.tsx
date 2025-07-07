import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Place, Telegram, MailOutline } from '@mui/icons-material';
import { Box } from '@mui/material';

import Input from '@components/Input';
import Select from '@components/Select';
import ActionButton from '@components/Button';

import { useAppSelector } from '@hooks/useAppSelector';

import { fetchAddress } from '@store/Address/AddressCreator';
import { fetchPackageParams } from '@store/Packages/PackageCreator';

import box from '@assets/package-open.svg';
import qr from '@assets/QR_koronapay.svg';
import bgImage from '@assets/bg-image.svg';
import giftImageSmall from '@assets/gift-small.svg';

import './Home.scss';

const HomePage = () => {
    const { cities } = useAppSelector((state) => state.addressReducer);
    const { packages } = useAppSelector((state) => state.packageReducer);
    const [orderNumber, setOrderNumber] = useState<number | null>(null);
    const dispatch: any = useDispatch();
    useEffect(() => {
        dispatch(fetchAddress());
        dispatch(fetchPackageParams());
    }, []);
    const handleOrderSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderNumber(e.target.valueAsNumber);
    };
    return (
        <main className='home-page'>
            <div className='container'>
                <section className='home-page-header'>
                    <div>
                        <h1 className='home-page-title'>Мы доставим ваш заказ</h1>
                        <h2 className='home-page-subtitle'>
                            Отправляйте посылки в приложении Шифт Delivery
                        </h2>
                    </div>
                    <Box className={'box'}>
                        <img src={box} alt='box' />
                        <img src={qr} alt='QR-code' />
                        <span>{'Наведите камеру телефона\nна QR-код'}</span>
                    </Box>
                    <img className='home-page-image' src={bgImage} alt='Delivery Box ' />
                </section>
                <section className='home-page-body'>
                    <div className='inner-wrapper'>
                        <Box className={'box calculator'}>
                            <h2 className='box-title'>Рассчитать доставку</h2>
                            <div className='input-wrapper'>
                                <Select options={cities} label='Город отправки' icon={<Place />} />
                                <Select
                                    options={cities}
                                    label='Город назначения'
                                    icon={<Telegram />}
                                />
                                <Select
                                    options={packages}
                                    label='Размер посылки'
                                    icon={<MailOutline />}
                                />
                            </div>
                            <ActionButton
                                text={'Рассчитать'}
                                type={'button'}
                                color='primary'
                                disabled={false}
                            />
                        </Box>
                        <div className='home-page-footer'>
                            <Box className={'box tracker'}>
                                <h2 className='box-title'>Отследить посылку</h2>
                                <div className='wrapper'>
                                    <Input
                                        value={orderNumber}
                                        onChange={handleOrderSearch}
                                        type='number'
                                        placeholder='Номер заказа'
                                    />
                                    <ActionButton
                                        text={'Найти'}
                                        type={'button'}
                                        disabled={false}
                                        color='primary'
                                    />
                                </div>
                            </Box>
                            <Box className={'box advertise'}>
                                <div className='inner-wrapper'>
                                    <div className='text'>
                                        <h2>
                                            <b>Бесплатная доставка</b>
                                        </h2>
                                        <p>за приведенного друга</p>
                                    </div>
                                    <img src={giftImageSmall} alt='gift' />
                                </div>
                            </Box>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default HomePage;
