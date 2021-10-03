import React from 'react';
import s from './App.module.css'
import Button from './Button/Button';
import Input from './input/Input';
import axios from "axios";
function validateEmail(email) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
const API = process.env.REACT_APP_API_KEY;
export default class App3 extends React.Component {
	state ={
		isFormValid: false,
		formControls: {
			email:{
				value: '',
				type: 'email',
				label: "your Email",
				errorMessage: "invalid Email",
				valid:false,
				touched:false,
				validation:{
					required:true,
					email:true,
				}
			},
			password: {
				value: '',
				type: 'password',
				label: "your password",
				errorMessage: "invalid password",
				valid: false,
				touched: false,
				validation: {
					required: true,
					minLength: 10,
					hasNumber: true
				}
			}
		}
	}
validateControl = (value,validation) =>{
	if (!validation) return true;
	let isValid = true;
	if (validation.required){
		isValid = value.trim() !== '' && isValid;
	}
	if (validation.email) {
		isValid = validateEmail(value) && isValid;
	}
	if (validation.minLength) {
		isValid = value.length >= validation.minLength && isValid;
	}
	if (validation.hasNumber) {
		isValid = !!value.match(/[0-9]/g) && isValid;
	}
	return isValid;
}
	handlerSubmit = (e) =>{
		e.preventDefault()
	}
	changeHandler = (event, controlName) => {
	
		const formControls = { ...this.state.formControls };
		const control = { ...formControls[controlName] }
		// վրշերանշանակում ենք
		control.value = event.target.value;
		control.touched = true;
		control.valid = this.validateControl(control.value, control.validation);
		// փոփոխություններից հետո օրիգինալը փոխում ենք մեր սարքածով
		formControls[controlName] = control;

		// etap 4
		let isFormValid = true;
		Object.keys(formControls).forEach(name => {
			isFormValid = formControls[name].valid && isFormValid
		})
		this.setState({
			formControls,
			isFormValid
		});
	}
	renderInputs = () => {
		return Object.keys(this.state.formControls).map((InputName, index)=>{
			let control = this.state.formControls[InputName];
			return (
				<Input 
					key={index}
					type={control.type}
					value={control.value}
					label={control.label}
					valid={control.valid}
					touched={control.touched}
					errorMessage={control.errorMessage}
					shoulValidate={!!control.validation}
					onChange ={(event) => this.changeHandler(event,InputName )}
				/>
			)
		})
	}
	registerHandler = async () =>{
		const data = {
			email: this.state.formControls.email.value,
			password: this.state.formControls.password.value,
			returnSecureToken:true
		}
		try {
			let response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API}`);
			console.log(response);
		} catch (error) {
			console.log(error);
		}
		
	}
	loginHandler =() =>{
		const data = {
			email: this.state.formControls.email.value,
			password: this.state.formControls.password.value,
			returnSecureToken:true
		}
		try {
			let response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API}`,data);
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	}
render(){
	return (
		<div className={s.main} >
			<h1>Register</h1>
			<form onSubmit={this.handlerSubmit} className={s.authForm}>
					{this.renderInputs()}
					<Button
					type='success'
					disabled={!this.state.isFormValid}
					onClick={this.loginHandler}>
							Sigh in
					</Button>
					<Button
					type="primary"
					disabled={!this.state.isFormValid}
					onClick={this.registerHandler}>
								regster
					</Button>
			</form>
		</div>
	)
}
}
