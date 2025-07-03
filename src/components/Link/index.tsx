import React, { type ReactNode } from 'react';
import './Link.scss';

interface NavProps {
    href: string;
    text: string;
    icon?: ReactNode;
}

const NavLink: React.FC<NavProps> = ({ href, text, icon }) => {
    return (
        <a href={href} className='link'>
            {icon}
            <p>{text}</p>
        </a>
    );
};

export default NavLink;
