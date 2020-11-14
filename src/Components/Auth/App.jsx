import React, { Component } from 'react'
import classes from './App.module.css'
import Button from './Button/Button'
import Input from './input/Input'
import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;
//email validation RegExp
function validateEmail(email) {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

export class App extends Component {
	// Form Control state
	state = {
		isFormValid: false,
		formControls: {
			email: {
				value: "",
				type: "email",
				label: "Email",
				errorMessage: "Введите корректный email",
				valid: false,
				touched: false,
				validation: {
					reqired: true,
					email: true
				}
			},
			password: {
				value: "",
				type: "password",
				label: "Пароль",
				errorMessage: "Введите корректный пароль",
				valid: false,
				touched: false,
				validation: {
					reqired: true,
					minLength: 7
				}
			}
		}
	}

	loginHandler = async () => {
		// Form Validation Etap 4
		let data = {
			email: this.state.formControls.email.value,
			password: this.state.formControls.password.value,
			returnSecureToken: true
		}
		try {

			const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, data)
			console.log(response.data)
		} catch (error) {
			console.log(error)
		}
	}
	//reginterHandler ֆունկցիան գրանցումից հետո տվյալները պահում է ՛firebase՛-ում
	// պահանջվող պարամերներ -->https://firebase.google.com/docs/reference/rest/auth#section-create-email-password
	//պահանջվող պարամերներ--> API-KEY ՛firebase՛-ի պրոյեկտից
	// link => https://console.firebase.google.com/u/0/project/react-project-n1/settings/general
	reginterHandler = async () => {
		let data = {
			email: this.state.formControls.email.value,
			password: this.state.formControls.password.value,
			//Независимо от того, чтобы вернуть идентификатор и обновить токен. Всегда должно быть правдой.
			returnSecureToken: true
		}
		try {
		const response = await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDDgXhQCNqtZhxe78UoHEBZFPm97kky2KU",data)
		console.log(response)
		} catch (error) {
			console.log(error)
		}
	}
	submitHandler = (e) => {
		e.preventDefault();
	}
	validateControl = (value, validation) => {
		if (!validation) {
			// եթե չենք փոխանցել ՛validation՛ ուրեմն վալիդացիա պետք չէ
			return true;
		}
		let isValid = true;
		//stugumner
		if (validation.required) {
			isValid = value.trim() !== '' && isValid;
		}

		if (validation.email) {
			isValid = validateEmail(value) && isValid;
		}

		if (validation.minLength) {
			isValid = value.length >= validation.minLength && isValid;
		}
		return isValid;
	}
	onChangeHandler = (event, controlName) => {
		// սարքում ենք կրկնորինակներ
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

	//Input Generator
	renderInputs = () => {
		return Object.keys(this.state.formControls).map((controlName, index) => {
			const control = this.state.formControls[controlName];
			return (
				<Input
					key={controlName + index}
					type={control.type}
					value={control.value}
					valid={control.valid}
					touched={control.touched}
					label={control.label}
					errorMessage={control.errorMessage}
					// !! սարքում է Boolean տիպի փոփոխական
					shoulValidate={!!control.validation}
					onChange={event => this.onChangeHandler(event, controlName)}
				/>
			)
		})
	}

	render() {
		return (
			<div className={classes.main}>
				<h1>Авторизация</h1>
				<form onSubmit={this.submitHandler} className={classes.authForm}>
					{/* <Input 
					label="Email"/>
					<Input 
					label="Password"
					errorMessage="has Error"
					/> */}
					{this.renderInputs()}
					<Button
						type='success'
						onClick={this.loginHandler}
						disabled={!this.state.isFormValid}
					>Войти</Button>
					<Button
						type='primary'
						onClick={this.reginterHandler}
						disabled={!this.state.isFormValid}
					>Зарегистрироваться</Button>
				</form>
			</div>
		)
	}
}
export default App;

// const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBSKP-eNe0gJZGNLpAN--6we2iFvFg7Xl0', data)