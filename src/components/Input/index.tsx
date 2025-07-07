import React from 'react';
import './Input.scss';

interface InputProps {
    label?: string;
    type?: string;
    placeholder?: string;
    value: string | number | null;
    error?: boolean;
    errorMessage?: string;
    hint?: string;
    hintMessage?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input = ({
    label,
    value,
    onChange,
    placeholder,
    type = 'text',
    error,
    hint,
    errorMessage,
    hintMessage,
}: InputProps) => {
    return (
        <>
            {label && <label className='input__label'>{label}</label>}
            <input
                className='input'
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
            {hint && !error && <p className={'input__hint'}>{hintMessage}</p>}
            {error && <p className={'input__hint error'}>{errorMessage}</p>}
        </>
    );
};

export default Input;
