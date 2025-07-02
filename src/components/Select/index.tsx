import React, { type ReactNode } from 'react';
import type { City } from 'src/models/City';

interface SelectProps {
    options: any[];
    label: string;
    icon?: ReactNode;
    sub?: ReactNode[];
}

const Select: React.FC<SelectProps> = ({ options, label, sub }) => {
    return (
        <div className='select-form'>
            <label htmlFor='select'>{label}</label>
            <select name='select' id='select'>
                {options.map((item) => {
                    return <option value={item.value}>{item.name}</option>;
                })}
            </select>
            {sub && <div className='sub-items-wrapper'>{sub.map((item) => item)}</div>}
        </div>
    );
};

export default Select;
