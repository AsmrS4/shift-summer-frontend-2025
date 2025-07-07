import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import './Link.scss';

interface NavProps {
    href: string;
    text: string;
    icon?: ReactNode;
    isSelected?: boolean;
}

const NavLink = ({ href, text, icon, isSelected = false }: NavProps) => {
    const linkClassName = clsx('link', {
        active: isSelected,
    });
    return (
        <a href={href} className={linkClassName}>
            {icon}
            <p>{text}</p>
        </a>
    );
};

export default NavLink;
