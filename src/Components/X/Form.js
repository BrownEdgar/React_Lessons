import  Input  from './UI/input/Input'
import React, {useState} from 'react'
function validateEmail(email) {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
export default function Form(props) {
	const [formdata, setFormdata] = useState({
		name:{
			type: "text",
			value: "",
			errorMessage: "Incoreq name field!",
			isValid: false,
			label:"username",
			validate: {
				required:true,
			}
		},
			email: {
				type: "email",
				value: "",
				errorMessage: "Incoreq email field!",
				isValid: false,
				label: "E-mail",
				validate: {
					required: true,
					email:true
				}
		},
			phone: {
				type: "tel",
				value: "",
				errorMessage: "Incoreq PhoneNumber field!",
				isValid: false,
				label: "Phone",
				validate: {
					required: true,
					phone: true,
					minLength: 9
				}
			}
		})
	const ValidationControl = (value, validation)=>{
		if (!validation)  return true;

		let isValid = true;
		if (validation.required){
			isValid = value.trim() !== ''  &&  isValid;
		}
		if (validation.email) {
			isValid = validateEmail(value) && isValid;
		}
		if (validation.phone) {
			isValid = value.match(/^[0-9]+$/g) && isValid;
		}
		if (validation.minLength) {
			isValid = value.length >= validation.minLength && isValid;
		}
		return isValid;
	}
	const handleOnchange = (event, InputName) => {
		// event.persist();
		const copy = {...formdata};
		const InputField = { ...copy[InputName]}
		InputField.value = event.target.value;
		InputField.isValid = ValidationControl(InputField.value, InputField.validate);
		copy[InputName] = InputField;
		setFormdata(copy)
	}
		const renderInputs = () => {
			return  Object.keys(formdata).map((InputName,index) => {
				const controlName = formdata[InputName]
				return (
					<Input 
					key={index}
					type={controlName.type}
					value={controlName.value}
					errorMessage={controlName.errorMessage}
					label={controlName.label}
					isValid={controlName.isValid}
					onChange={(e) => handleOnchange(e, InputName)}
					/>
				)
			})
		}
	return (
		<div>
			<h4>Please fill form below and Get 20% Off.</h4>
			<form>
				{renderInputs()}
			</form>
		</div>
	)
}
