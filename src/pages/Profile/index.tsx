import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { profileSchema, type ProfileSchema } from './schema.config';
import ActionButton from '@components/Button';
import './ProfilePage.scss';
import { useAppSelector } from '@hooks/useAppSelector';
import { useEffect, useState } from 'react';

import axios, { AxiosError } from 'axios';
import type { UserProps } from '@models/Session';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ProfileSchema>({
        resolver: zodResolver(profileSchema),
    });
    const navigate = useNavigate();
    const { token } = useAppSelector((state) => state.sessionReducer);
    const [user, setUser] = useState<UserProps>({
        phone: '',
        firstname: '',
        lastname: '',
        middlename: '',
        email: '',
        city: '',
    });
    const fetchUser = async () => {
        try {
            const response = await axios.get('https://shift-intensive.ru/api/users/session', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(response.data.user);
            setUser(response.data.user);
            reset({
                lastname: response.data.user.lastname,
                firstname: response.data.user.firstname,
                middlename: response.data.user.middlename,
                phone: response.data.user.phone,
                email: response.data.user.email,
                city: response.data.user.city,
            });
        } catch (error) {
            console.log(error);
        }
    };
    const updateUser = async (form: ProfileSchema) => {
        try {
            const response = await axios.patch(
                'https://shift-intensive.ru/api/users/profile',
                {
                    ...form,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                },
            );
        } catch (error) {
            if (error instanceof AxiosError && error.response) {
                if (error.response.status == 500) {
                    navigate('/server-error');
                }
            }
        }
    };
    useEffect(() => {
        fetchUser();
    }, []);
    const onSubmit = (form: ProfileSchema) => {
        updateUser(form);
    };
    return (
        <main className='profile-page'>
            <div className='container'>
                <h2>Профиль</h2>
                <form action='' onSubmit={handleSubmit(onSubmit)}>
                    <div className='container'>
                        <div className='left-child'>
                            <div className='input-wrapper'>
                                <label className='input-label'>Фамилия</label>
                                <input
                                    className={'input'}
                                    type='text'
                                    defaultValue={user.lastname}
                                    placeholder='Фамилия'
                                    {...register('lastname')}
                                />
                                {errors.lastname && (
                                    <p className='error'>{errors.lastname.message}</p>
                                )}
                            </div>
                            <div className='input-wrapper'>
                                <label className='input-label'>Имя</label>
                                <input
                                    className={'input'}
                                    type='text'
                                    defaultValue={user.firstname}
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
                                    defaultValue={user.middlename}
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
                                    defaultValue={user.phone}
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
                                    defaultValue={user.email}
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
                                    defaultValue={user.city}
                                    placeholder='Город'
                                    {...register('city')}
                                />
                                {errors.city && <p className='error'>{errors.city.message}</p>}
                            </div>
                        </div>
                    </div>
                    <ActionButton text={'Обновить данные'} type={'submit'} color='primary' />
                </form>
            </div>
        </main>
    );
};

export default ProfilePage;
