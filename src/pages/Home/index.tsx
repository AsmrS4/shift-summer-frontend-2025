import React, { useEffect } from 'react';
import PlaceIcon from '@mui/icons-material/Place';
import TelegramIcon from '@mui/icons-material/Telegram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import './Home.scss';
import { Box } from '@mui/material';
import box from '@assets/package-open.svg';
import qr from '@assets/QR_koronapay.svg';
import bgImage from '@assets/bg-image.svg';
import ActionButton from '@components/Button';
import Select from '@components/Select';
import { useAppSelector } from '@hooks/useAppSelector';
import { useDispatch } from 'react-redux';
import { fetchAddress } from '@store/Address/AddressCreator';

const HomePage = () => {
    const { cities } = useAppSelector((state) => state.addressReducer);
    const dispatch: any = useDispatch();
    useEffect(() => {
        dispatch(fetchAddress());
    }, []);
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
                            <h2 className='box__title'>Рассчитать доставку</h2>
                            <div className='input-wrapper'>
                                <Select
                                    options={cities}
                                    label={'Город отправки'}
                                    icon={<PlaceIcon />}
                                />
                                <Select
                                    options={cities}
                                    label={'Город назначения'}
                                    icon={<TelegramIcon />}
                                />
                                <Select
                                    options={[]}
                                    label={'Размер посылки'}
                                    icon={<MailOutlineIcon />}
                                />
                            </div>
                            <ActionButton text={'Рассчитать'} type={'button'} disabled={false} />
                        </Box>
                        <div className='home-page__body__footer'>
                            <Box className={'box tracker'}>
                                <h2 className='box__title'>Отследить послыку</h2>
                                <div className='wrapper'>
                                    <input type='text' />
                                    <ActionButton text={'Найти'} type={'button'} disabled={false} />
                                </div>
                            </Box>
                            <Box className={'box advertise'}></Box>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default HomePage;
