import React from 'react';
import logoSrc from '@assets/SHIFT_LOGO.svg';

const AppLogo: React.FC = () => {
    return (
        <div className='logo'>
            <img src={logoSrc} alt='Logo' />
        </div>
    );
};

export default AppLogo;
