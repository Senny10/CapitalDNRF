import React, { ChangeEventHandler, useContext } from "react";
import { FormContext } from "../FormContext";

interface InputProps {
	label: string;
	name: string;
	value: string;
	placeholder?: string;
	required?: boolean;
	options?: Array<{
		label: string;
		value: string;
	}>;
	updateValue: ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
}

const DropDown = ({
	label,
	name,
	value,
	placeholder,
	required,
	options,
	updateValue,
}: InputProps) => {
	const formContext = useContext(FormContext);
	options = formContext[name]?.options || options;

	return (
		<div className='medium-6 cell'>
			<label>
				{label}
				<select
					title={label}
					name={name}
					value={value}
					required={!!required}
					onChange={updateValue}
				>
					<option value='' disabled>
						{placeholder}
					</option>
					{options.map((option) => (
						<option
							key={`${name}-${option.value}`}
							value={option.value}
						>
							{option.label}
						</option>
					))}
				</select>
			</label>
		</div>
	);
};

export default DropDown;
