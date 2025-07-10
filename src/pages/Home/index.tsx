import React, { useEffect, useRef, useState } from 'react';
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
import type { DeliveryPoint, Point } from '@models/DeliveryPoint';
import type { PackageCreate } from '@models/Package';
import instance from '@api/index';
import { setTypes } from '@store/Delivery/ProccessDelivery/ProcessDeliveryReducer';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const { cities } = useAppSelector((state) => state.addressReducer);
    const { packages } = useAppSelector((state) => state.packageReducer);
    const packageRef = useRef<HTMLDivElement>(null);
    const senderRef = useRef<HTMLDivElement>(null);
    const receiverRef = useRef<HTMLDivElement>(null);
    const [orderNumber, setOrderNumber] = useState<number | null>(null);
    const dispatch: any = useDispatch();
    const navigate: any = useNavigate();
    useEffect(() => {
        dispatch(fetchAddress());
        dispatch(fetchPackageParams());
    }, []);
    const handleOrderSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderNumber(e.target.valueAsNumber);
    };
    const findItemByName = (array: any[], name: string) => {
        return array.find((item) => item.name == name);
    };
    const mapPoint = (point: DeliveryPoint): Point => {
        return {
            longitude: point.longitude,
            latitude: point.latitude,
        };
    };
    const handleSubmit = () => {
        const { height, weight, length, width } = findItemByName(
            packages,
            packageRef.current.value,
        );

        const senderPoint: Point = mapPoint(findItemByName(cities, senderRef.current.value));
        const receiverPoint: Point = mapPoint(findItemByName(cities, receiverRef.current.value));
        const packageData: PackageCreate = { height, weight, length, width };

        processDelivery(packageData, senderPoint, receiverPoint);
    };
    const processDelivery = async (
        packageProps: PackageCreate,
        senderPoint: Point,
        receiverPoint: Point,
    ) => {
        try {
            const response = await instance.post('/calc', {
                package: { ...packageProps },
                senderPoint: { ...senderPoint },
                receiverPoint: { ...receiverPoint },
            });
            console.log(response.data);
            dispatch(setTypes(response.data.options));
            navigate('/delivery-registration/method');
        } catch (error) {
            console.log('error: ' + error);
        }
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
                                <Select
                                    options={cities}
                                    label='Город отправки'
                                    icon={<Place />}
                                    ref={senderRef}
                                />
                                <Select
                                    options={cities}
                                    label='Город назначения'
                                    icon={<Telegram />}
                                    ref={receiverRef}
                                />
                                <Select
                                    options={packages}
                                    label='Размер посылки'
                                    icon={<MailOutline />}
                                    ref={packageRef}
                                />
                            </div>
                            <ActionButton
                                text={'Рассчитать'}
                                type={'button'}
                                color='primary'
                                disabled={false}
                                onClick={handleSubmit}
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
