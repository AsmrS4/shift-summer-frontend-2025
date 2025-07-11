import ActionButton from '@components/Button';
import LinearProgressBar from '@components/ProgressBar/LinearBar';
import { decrementStep } from '@store/ProgressBar/ProgressBarReducer';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '@hooks/useAppSelector';
import type { DeliveryType, PackageProps } from '@models/Package';
import { useState } from 'react';
import { getFullAddress, getFullName } from '@utils/index';

const DeliveryCreateDetailsPage = () => {
    const dispatch: any = useDispatch();
    const navigate = useNavigate();
    const { data } = useAppSelector((state) => state.createOrderReducer);
    const { types } = useAppSelector((state) => state.processDeliveryReducer);
    const handleNavigate = () => {
        dispatch(decrementStep());
        navigate(-1);
    };
    const mapProcessDeliveryByType = () => {
        return types.find((item) => item.type === data.optionType);
    };
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(data);
    };
    const processDetails: DeliveryType | undefined = mapProcessDeliveryByType();
    return (
        <main className='delivery-page'>
            <div className='container'>
                <div className='inner-wrapper full-w'>
                    <h2>Проверка данных заказа</h2>
                    <LinearProgressBar />
                    <form action='' onSubmit={handleSubmit}>
                        <div className='information-card'>
                            <p>Получатель</p>
                            <div className='details'>
                                <label className='label'>ФИО</label>
                                <p>
                                    {getFullName(
                                        data.receiver.firstname,
                                        data.receiver.lastname,
                                        data.receiver.middlename,
                                    )}
                                </p>
                            </div>
                            <div className='details'>
                                <label className='label'>Телефон</label>
                                <p>{data.receiver.phone}</p>
                            </div>
                            <div
                                onClick={() => {
                                    navigate('/delivery-registration/receiver');
                                }}
                            >
                                <EditIcon />
                            </div>
                        </div>
                        <div className='information-card'>
                            <p>Отправитель</p>
                            <div className='details'>
                                <label className='label'>ФИО</label>
                                <p>
                                    {getFullName(
                                        data.sender.firstname,
                                        data.sender.lastname,
                                        data.sender.middlename,
                                    )}
                                </p>
                            </div>
                            <div className='details'>
                                <label className='label'>Телефон</label>
                                <p>{data.sender.phone}</p>
                            </div>
                            <div
                                onClick={() => {
                                    navigate('/delivery-registration/sender');
                                }}
                            >
                                <EditIcon />
                            </div>
                        </div>
                        <div className='information-card'>
                            <p>Откуда забрать</p>
                            <div className='details'>
                                <label className='label'>Адрес</label>
                                <p>
                                    {getFullAddress(
                                        data.senderAddress.street,
                                        data.senderAddress.house,
                                        data.senderAddress.apartment,
                                    )}
                                </p>
                            </div>
                            <div className='details'>
                                <label className='label'>Заметка</label>
                                <p>
                                    {data.senderAddress.comment
                                        ? data.senderAddress.comment
                                        : 'Не указано'}
                                </p>
                            </div>
                            <div
                                onClick={() => {
                                    navigate('/delivery-registration/send-from');
                                }}
                            >
                                <EditIcon />
                            </div>
                        </div>
                        <div className='information-card'>
                            <p>Куда доставить</p>
                            <div className='details'>
                                <label className='label'>Адрес</label>
                                <p>
                                    {getFullAddress(
                                        data.receiverAddress.street,
                                        data.receiverAddress.house,
                                        data.receiverAddress.apartment,
                                    )}
                                </p>
                            </div>
                            <div className='details'>
                                <label className='label'>Заметка</label>
                                <p>
                                    {data.receiverAddress.comment
                                        ? data.receiverAddress.comment
                                        : 'Не указано'}
                                </p>
                            </div>
                            <div
                                onClick={() => {
                                    navigate('/delivery-registration/receive-to');
                                }}
                            >
                                <EditIcon />
                            </div>
                        </div>
                        <div className='calculation-wrapper'>
                            <div className='price'>
                                <h3>Итого:</h3>
                                <h3>{processDetails?.price}₽</h3>
                            </div>
                            <div className='calc-details'>
                                <p>Тариф: {processDetails?.name}</p>
                                <p>Срок: {processDetails?.days} рабочий день</p>
                            </div>
                        </div>
                        <div className='buttons-wrapper'>
                            <ActionButton
                                text={'Назад'}
                                type={'submit'}
                                color='default'
                                onClick={handleNavigate}
                            />
                            <ActionButton text={'Отправить'} type={'submit'} color='primary' />
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default DeliveryCreateDetailsPage;
