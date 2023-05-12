import React from "react";


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const Input = ({ label, ...props }: InputProps) => {
    return (
        <div className='medium-6 cell'>
            <label>
                {label}
                <input {...props} />
            </label>
        </div>
    );
};

export default Input;
