import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { profileSchema, type ProfileSchema } from './schema.config';
import ActionButton from '@components/Button';
import './ProfilePage.scss';
import { useAppSelector } from '@hooks/useAppSelector';
import Select from '@components/Select';
import { Place } from '@mui/icons-material';
import { useRef } from 'react';

const ProfilePage = () => {
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm<ProfileSchema>({
        resolver: zodResolver(profileSchema),
    });
    const { firstname, lastname, middlename, phone, email, city } = useAppSelector(
        (state) => state.userReducer,
    );
    const onSubmit = (form: ProfileSchema) => {};
    return (
        <main className='profile-page'>
            <div className='container'>
                <h2>Профиль</h2>
                <form action='' onSubmit={handleSubmit(onSubmit)}>
                    <div className='left-child'>
                        <div className='input-wrapper'>
                            <label className='input-label'>Фамилия</label>
                            <input
                                className={'input'}
                                type='text'
                                defaultValue={lastname}
                                placeholder='Фамилия'
                                {...register('lastname')}
                            />
                            {errors.lastname && <p className='error'>{errors.lastname.message}</p>}
                        </div>
                        <div className='input-wrapper'>
                            <label className='input-label'>Имя</label>
                            <input
                                className={'input'}
                                type='text'
                                defaultValue={firstname}
                                placeholder='Имя'
                                {...register('firstname')}
                            />
                            {errors.firstname && (
                                <p className='error'>{errors.firstname.message}</p>
                            )}
                        </div>
                        <div className='input-wrapper'>
                            <label className='input-label'>Отчество</label>
                            <input
                                className={'input'}
                                type='text'
                                defaultValue={middlename}
                                placeholder='Отчество (при наличии)'
                                {...register('middlename')}
                            />
                            {errors.middlename && (
                                <p className='error'>{errors.middlename.message}</p>
                            )}
                        </div>
                    </div>
                    <div className='right-child'>
                        <div className='input-wrapper'>
                            <label className='input-label'>Телефон</label>
                            <input
                                className={'input'}
                                type='text'
                                defaultValue={phone}
                                placeholder='Телефон'
                                {...register('phone')}
                            />
                            {errors.phone && <p className='error'>{errors.phone.message}</p>}
                        </div>
                        <div className='input-wrapper'>
                            <label className='input-label'>Email</label>
                            <input
                                className={'input'}
                                type='text'
                                defaultValue={email}
                                placeholder='Email'
                                {...register('email')}
                            />
                            {errors.email && <p className='error'>{errors.email.message}</p>}
                        </div>
                        <div className='input-wrapper'>
                            <label className='input-label'>Город</label>
                            <input
                                className={'input'}
                                type='text'
                                defaultValue={city}
                                placeholder='Город'
                                {...register('city')}
                            />
                            {errors.city && <p className='error'>{errors.city.message}</p>}
                        </div>
                    </div>
                </form>
                <ActionButton text={'Обновить данные'} type={'submit'} color='primary' />
            </div>
        </main>
    );
};

export default ProfilePage;
