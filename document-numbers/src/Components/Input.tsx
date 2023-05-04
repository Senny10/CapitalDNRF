import React, { ChangeEventHandler, useContext } from 'react';
import { FormContext } from '../FormContext';

interface InputProps {
    label: string;
    name: string;
    value: string;
    placeholder?: string;
    required?: boolean;
    type?: 'text' | 'email' | 'drop-down';
    options?: Array<{
        label: string;
        value: string;
    }>;
    updateValue: ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
}


const createInputComponent = ({ label, name, value, placeholder, required, type, options, updateValue }: InputProps) => {
    type = !!type ? type : 'text';

    if (['text', 'email'].includes(type)) {
        return <input
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            required={!!required}
            onChange={updateValue}
        />;
    }

    if ('drop-down' === type) {
        if (!options) {
            return <div>MISSING OPTIONS</div>;
        }

        return (
            <select
                title={label}
                name={name}
                value={value}
                required={!!required}
                onChange={updateValue}
                defaultValue={''}
            >
                <option value='' disabled>{placeholder}</option>
                {options.map(option => (
                    <option
                        key={`${name}-${option.value}`}
                        value={option.value}
                    >{option.label}</option>
                ))}
            </select>
        )
    }

    return <div>INCORRECT TYPE</div>;
}

const Input = ({ label, name, value, placeholder, required, type, options, updateValue }: InputProps) => {
    const formContext = useContext(FormContext)
    options = formContext[name]?.options || options;
    const componentElement = createInputComponent({ label, name, value, placeholder, required, type, options, updateValue });

    return (
        <div className="medium-6 cell">
            <label>
                {label}
                {componentElement}
            </label>
        </div>
    );
};

export default Input;
