import { PermIdentity, Schedule, Logout, Login } from '@mui/icons-material';
import NavLink from '@components/Link';
import logoSrc from '@assets/SHIFT_LOGO.svg';

import './Header.scss';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '@hooks/useAppSelector';
import { logoutUser } from '@store/Session/SessionCreator';

const Header = () => {
    const navigate = useNavigate();
    const { isAuth } = useAppSelector((state) => state.sessionReducer);
    const handleClick = () => {
        if (isAuth) {
            localStorage.removeItem('ACCESS_TOKEN');
            logoutUser();
        }
    };
    return (
        <header className='header'>
            <div className='wrapper'>
                <div
                    className='logo'
                    onClick={() => {
                        navigate('/');
                    }}
                >
                    <img src={logoSrc} alt='Logo' />
                </div>
                <nav className='navigation'>
                    <div className='left-child'>
                        {isAuth && (
                            <>
                                <NavLink
                                    href={'/profile'}
                                    text={'Профиль'}
                                    icon={<PermIdentity />}
                                />
                                <NavLink href={'/history'} text={'История'} icon={<Schedule />} />
                            </>
                        )}
                    </div>
                    <div className='right-child' onClick={handleClick}>
                        {isAuth ? (
                            <NavLink href={'/'} text={'Выйти'} icon={<Logout />} />
                        ) : (
                            <NavLink href={'/sign-in'} text={'Войти'} icon={<Login />} />
                        )}
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
