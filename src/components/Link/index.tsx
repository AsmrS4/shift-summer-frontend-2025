import React, { type ReactNode } from 'react';
import './Link.scss';

interface NavProps {
    href: string;
    text: string;
    icon?: ReactNode;
}

const NavLink = ({ href, text, icon }: NavProps) => {
    return (
        <a href={href} className='link'>
            {icon}
            <p>{text}</p>
        </a>
    );
};

export default NavLink;
