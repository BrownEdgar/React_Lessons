import { Button } from './Button/Button';
import React, {useState} from 'react'
import Input from "./input/testInput"
import Axios from 'axios';

const api_key = process.env.REACT_APP_API_KEY
function validateEmail(email) {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
export default function App2() {
	const [data, setdata] = useState({
		formControls:{
			email: {
				type:"email",
				value:"",
				isValid:false,
				label:"Email",
				errorMessage:"Invalid Email address!",
				tached:false,
				validation:{
					required:true,
					email:true,
				}
			},
			password: {
				type: "password",
				value: "",
				isValid: false,
				label: "Password",
				errorMessage: "Invalid password",
				tached:false,
				validation: {
					required: true,
					minLength:8,
					hasUpperCase:true,

				}
			}
		}
	})
	cosnt validate = (value, validation) => {
		if (!validation) return true;
		let isValid = true;
		if (validation.required) {
			isValid = value.trim() !== "" && isValid;
		}
		if (validation.minLength) {
			isValid = value.length >= validation.minLength && isValid;
		}
		if (validation.hasUpperCase) {
			isValid = value.match(/[A-Z]/g) && isValid;
		}
		if (validation.email) {
			isValid = validateEmail(value) && isValid;
		}
		return isValid;

	}
	const changeHandler = (e,inputName) => {
	  let copyData = {...data};
		let copyDasht = { ...data.copyData.formControls[inputName]};
		copyDasht.value = e.target.value;
		copyDasht.tached = true;
		copyDasht.isValid = validate(e.target.value, copyDasht.validation);
		copyData[inputName] = copyDasht;
		setdata(copyData);
	}

	const renderInputs = () => {
		return Object.keys(data.formControls).map((elem,index)=> {
			const x = data.formControls[elem]
			return (
				<Input
				key={index}
				type={x.type}
				value={x.value}
				label={x.label}
				isValid={x.isValid}
				errorMessage={x.errorMessage}
				shouldValidate={!!x.validation}
				tached={x.tached}
				onChange={e => changeHandler(e, x)}
				 />
			)
		})
	}
	const loginHandler = async () => {
		const data = {
			email: data.formControls.email.value,
			password: data.formControls.password.value,
			returnSecureToken: true,
		}
		try {
			let response = await Axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${api_key}`, data);
			console.log(response)

		} catch (error) {
			console.log(error)
		}
	}
	const reginterHandler = async () => {
		const data = {
			email: data.formControls.email.value,
			password: data.formControls.password.value,
			returnSecureToken:true,
		}
		try {
			let response = await Axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${api_key}`,data);
			console.log(response)
			
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<div>
			<form>
				{renderInputs()}
				<Button
					type='success'
					onClick={loginHandler}
					disabled={!this.state.isFormValid}
				>Войти</Button>
				<Button
					type='primary'
					onClick={reginterHandler}
					disabled={!this.state.isFormValid}
				>Зарегистрироваться</Button>
			</form>
		</div>
	)
}
