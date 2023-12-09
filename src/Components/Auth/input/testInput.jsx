import React from 'react'
import classes from './input.module.css'
const isInvalid = ({ isValid, shouldValidate, tached}) => {
	return !isValid && shouldValidate && tached

} 
export default function testInput(props) {
	const type = props.type || "text";
	let cls = [classes.Input] 
	const htmlFor = `${type}-${Math.random()}`;

	if (isInvalid(props)){
		cls.push(classes.invalid);
	}
	return (
		<div className={cls.join(" ")}>
			<label htmlFor={htmlFor}>
				<input 
				type={type}
				id={htmlFor}
				value={props.value}
				onChange={props.onChange}
				/>
				{isInvalid(props)
					? <span>{props.errorMessage || "Введите верное значение"}</span>
					: null}
			</label>
		</div>
	)
}
