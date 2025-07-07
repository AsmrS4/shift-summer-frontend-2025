import type React from 'react';
import { PermIdentity, Schedule, Logout, Login } from '@mui/icons-material';
import NavLink from '@components/Link';
import logoSrc from '@assets/SHIFT_LOGO.svg';

import './Header.scss';

const Header = () => {
    //TODO:вынести проверку авторизации в стор
    return (
        <header className='header'>
            <div className='wrapper'>
                <div className='logo'>
                    <img src={logoSrc} alt='Logo' />
                </div>
                <nav className='navigation'>
                    <div className='left-child'>
                        <NavLink href={'/profile'} text={'Профиль'} icon={<PermIdentity />} />
                        <NavLink href={'/history'} text={'История'} icon={<Schedule />} />
                    </div>
                    <div className='right-child'>
                        <NavLink href={'/sign-in'} text={'Выйти'} icon={<Logout />} />
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
