////////////////////////////////////////////////////////////////////////////////
// Ունիվերսալ Կոմպոնենտ ՛input՛-րի համար 
////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import classes from './input.module.css'

function isInvalid({ valid, touched, shoulValidate }) {
	// ստւգում ենք վալիդ է թե ոչ, պետք է վալիդացիա անցնի թե ոչ, 
	// և եթե արդեն ձեռք ենք տվել ուրեմն այն վալիդ չէ!
	return !valid && shoulValidate && touched
}


export default function Input(props) {
	// Որոշում է ՛input՛-ի տիպը, եթե ՛props՛-ով տրված չե, ապա՝"text"
	const inputType = props.type || "text";
	const cls = [classes.Input] || "text";
	const htmlFor = `${inputType}-${Math.random()}`;

	if (isInvalid(props)) {
		cls.push(classes.invalid)
	}
	return (
		<div className={cls.join(' ')}>
			<label htmlFor={htmlFor}>{props.label}</label>
			<input
				type={inputType}
				id={htmlFor}
				value={props.value}
				onChange={props.onChange}
			/>
			{/* Սղալների դեպքում */}
			{isInvalid(props) 
			? <span>{props.errorMessage || "Введите верное значение"}</span>
			: null}
		</div>
	)
}


