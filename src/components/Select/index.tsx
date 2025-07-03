import React, { type ReactNode } from 'react';
import './Select.scss';

interface SelectProps {
    options: any[];
    label: string;
    icon?: ReactNode;
    sub?: ReactNode[];
}

const Select: React.FC<SelectProps> = ({ options, label, sub, icon }) => {
    return (
        <div className='select-form'>
            <label htmlFor='select'>{label}</label>
            <div className='wrapper'>
                {icon}
                <select name='select' id='select'>
                    {options.map((item) => {
                        return <option value={item.value}>{item.name}</option>;
                    })}
                </select>
            </div>
            {sub && <div className='sub-items-wrapper'>{sub.map((item) => item)}</div>}
        </div>
    );
};

export default Select;
