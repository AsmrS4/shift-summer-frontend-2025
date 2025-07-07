import React from 'react';
import clsx from 'clsx';
import './Button.scss';

interface ButtonProps {
    text: string;
    type: 'submit' | 'button' | 'reset';
    disabled?: boolean;
    color?: 'default' | 'primary';
    onClick?: () => {};
}
const ActionButton = ({ text, type, disabled, onClick, color = 'default' }: ButtonProps) => {
    const buttonClassName = clsx('btn', {
        default: color == 'default',
        primary: color == 'primary',
    });
    return (
        <button className={buttonClassName} type={type} disabled={disabled} onClick={onClick}>
            {text}
        </button>
    );
};

export default ActionButton;
