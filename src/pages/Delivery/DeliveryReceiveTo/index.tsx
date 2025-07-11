import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import ActionButton from '@components/Button';
import LinearProgressBar from '@components/ProgressBar/LinearBar';
import { setReceiver } from '@store/Delivery/CreateOrder/CreateOrderReducer';
import { decrementStep, incrementStep } from '@store/ProgressBar/ProgressBarReducer';
import { useAppSelector } from '@hooks/useAppSelector';

import { addressFormSchema, type Address } from '../schema.config';

const DeliveryReceiveToPage = () => {
    const { receiverAddress } = useAppSelector((state) => state.createOrderReducer.data);
    const dispatch: any = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Address>({
        resolver: zodResolver(addressFormSchema),
    });
    const navigate = useNavigate();
    const handleNavigate = () => {
        dispatch(decrementStep());
        navigate(-1);
    };
    const onSubmit = (form: Address) => {
        console.log(form);
        dispatch(setReceiver(form));
        dispatch(incrementStep());
        navigate('/delivery-registration/payment');
    };
    return (
        <main className='delivery-page'>
            <div className='container'>
                <div className='inner-wrapper'>
                    <h2>Куда доставить</h2>
                    <LinearProgressBar />
                    <form action='' onSubmit={handleSubmit(onSubmit)}>
                        <div className='input-wrapper'>
                            <label className='input-label'>Улица</label>
                            <input
                                className={'input'}
                                defaultValue={receiverAddress.street}
                                type='text'
                                placeholder='Улица'
                                {...register('street')}
                            />
                            {errors.street && <p className='error'>{errors.street.message}</p>}
                        </div>
                        <div className='input-wrapper'>
                            <label className='input-label'>Номер дома</label>
                            <input
                                className={'input'}
                                defaultValue={receiverAddress.house}
                                type='text'
                                placeholder='Дом'
                                {...register('house')}
                            />
                            {errors.house && <p className='error'>{errors.house.message}</p>}
                        </div>
                        <div className='input-wrapper'>
                            <label className='input-label'>Номер квартиры</label>
                            <input
                                className={'input'}
                                defaultValue={receiverAddress.apartment}
                                type='text'
                                placeholder='Квартира'
                                {...register('apartment')}
                            />
                            {errors.apartment && (
                                <p className='error'>{errors.apartment.message}</p>
                            )}
                        </div>
                        <div className='input-wrapper'>
                            <label className='input-label'>Заметка</label>
                            <input
                                className={'input'}
                                defaultValue={receiverAddress.comment}
                                type='text'
                                placeholder='Заметка для курьера'
                                {...register('comment')}
                            />
                            {errors.comment && <p className='error'>{errors.comment.message}</p>}
                        </div>

                        <div className='buttons-wrapper'>
                            <ActionButton
                                text={'Назад'}
                                type={'button'}
                                color='default'
                                onClick={handleNavigate}
                            />
                            <ActionButton text={'Продолжить'} type={'submit'} color='primary' />
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default DeliveryReceiveToPage;
