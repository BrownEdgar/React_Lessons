import React from 'react'
import "./input.css"
export default function Input(props) {
	let type = props.type || "text";
	return (
		<div>
			<label htmlFor="">{props.label}</label>
			<input 
			type={type}
			value={props.value}
			onChange={props.onChange}
			/>
			{props.isValid ? null : <span id="feedback">{props.errorMessage || "Invalid Value"}</span>}
		</div>
	)
}
