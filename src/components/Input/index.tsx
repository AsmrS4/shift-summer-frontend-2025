import React from 'react';
import clsx from 'clsx';
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
    const inputClassName = clsx('input', {
        error: error,
    });
    return (
        <>
            {label && <label className='input-label'>{label}</label>}
            <input
                className={inputClassName}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
            {hint && !error && <p className={'input-hint'}>{hintMessage}</p>}
            {error && <p className={'input-hint error'}>{errorMessage}</p>}
        </>
    );
};

export default Input;
