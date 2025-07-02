import React from 'react';
import './Button.scss';

interface ButtonProps {
    text: string;
    type: 'submit' | 'button' | 'reset';
    disabled: boolean;
    onClick?: () => {};
}
const ActionButton: React.FC<ButtonProps> = ({ text, type, disabled, onClick }) => {
    return (
        <button className='btn' type={type} disabled={disabled} onClick={onClick}>
            {text}
        </button>
    );
};

export default ActionButton;
