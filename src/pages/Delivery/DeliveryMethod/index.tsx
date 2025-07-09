import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import LinearProgressBar from '@components/ProgressBar/LinearBar';
import ActionButton from '@components/Button';

import expressDeliveryIcon from '@assets/express-delivery-img.svg';
import defaultDeliveryIcon from '@assets/default-delivery-img.svg';
import giftImage from '@assets/gift-small.svg';

import '../DeliveryPage.scss';
import { useAppSelector } from '@hooks/useAppSelector';
import { useDispatch } from 'react-redux';
import { setPackageDetails } from '@store/Delivery/CreateOrder/CreateOrderReducer';
import type { DeliveryType } from '@models/Package';

const DeliveryPage = () => {
    const [deliveryType, setDeliveryType] = useState<string | null>(null);
    const [isDisabled, setIsDisabled] = useState<boolean>(true);
    const { types } = useAppSelector((state) => state.processDeliveryReducer);
    const dispatch: any = useDispatch();
    const navigate = useNavigate();
    const handleDeliveryType = (event: React.MouseEvent<HTMLLIElement>) => {
        const id = event.currentTarget.id;
        const type: DeliveryType | undefined = types.find((item) => item.id == id);
        setDeliveryType(id);
        dispatch(
            setPackageDetails({
                id: id,
                type: type!.type,
            }),
        );
    };
    const handleNavigate = () => {
        navigate(-1);
    };
    const cardIconMapper = (type: string) => {
        switch (type) {
            case 'EXPRESS':
                return expressDeliveryIcon;
            default:
                return defaultDeliveryIcon;
        }
    };

    useEffect(() => {
        document.querySelectorAll('.delivery-card').forEach((el) => {
            el.classList.remove('selected');
        });

        if (deliveryType !== null) {
            document.querySelectorAll('.delivery-card').forEach((el) => {
                if (el.getAttribute('id') === deliveryType) {
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
                        {types.map((item) => {
                            return (
                                <li
                                    key={item.id}
                                    className='delivery-card'
                                    data-value={item.type}
                                    onClick={handleDeliveryType}
                                    id={item.id}
                                >
                                    <div className='inner-wrapper'>
                                        <div className='delivery-card-header'>
                                            <img src={cardIconMapper(item.type)} alt='plane' />
                                            <div className='text'>
                                                <p>{item.name}</p>
                                                <h3>{item.price} ₽</h3>
                                            </div>
                                        </div>
                                        <div className='delivery-card-footer'>
                                            <p>{item.days} рабочий день</p>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}

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
