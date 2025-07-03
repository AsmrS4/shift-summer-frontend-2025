import type React from 'react';
import AppLogo from '@components/Logotype';
import ProfileIcon from '@mui/icons-material/PermIdentity';
import ScheduleIcon from '@mui/icons-material/Schedule';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import './Header.scss';
import NavLink from '@components/Link';

const Header: React.FC = () => {
    //TODO:вынести проверку авторизации в стор
    return (
        <header className='header'>
            <div className='wrapper'>
                <AppLogo />
                <nav className='header__navigation'>
                    <div className='left-child'>
                        <NavLink href={'/profile'} text={'Профиль'} icon={<ProfileIcon />} />
                        <NavLink href={'/history'} text={'История'} icon={<ScheduleIcon />} />
                    </div>
                    <div className='right-child'>
                        <NavLink href={'/sign-in'} text={'Выйти'} icon={<LogoutIcon />} />
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
