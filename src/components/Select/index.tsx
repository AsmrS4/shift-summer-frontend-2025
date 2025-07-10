import { type ReactNode } from 'react';
import './Select.scss';

interface SelectProps {
    ref: any;
    options: any[];
    label: string;
    icon?: ReactNode;
    sub?: ReactNode[];
}

const Select = ({ options, label, sub, icon, ref }: SelectProps) => {
    return (
        <div className='select-form'>
            <label htmlFor='select'>{label}</label>
            <div className='wrapper'>
                {icon}
                <select name='select' id='select' ref={ref}>
                    {options.map((item) => {
                        return (
                            <option id={item.id} value={item.value}>
                                {item.name}
                            </option>
                        );
                    })}
                </select>
            </div>
            {sub && <div className='sub-items-wrapper'>{sub.map((item) => item)}</div>}
        </div>
    );
};

export default Select;
