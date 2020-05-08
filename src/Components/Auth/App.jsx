import React, { Component } from 'react'
import classes from './App.module.css'
import Button from './Button/Button'
import Input from './input/Input'
//email validation RegExp
function validateEmail(email) {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

export class App extends Component {
	// Form Control state
	state = {
		isFormValid:false,
		formControls:{
			email:{
				value:"",
				type:"email",
				label:"Email",
				errorMessage:"Введите корректный email",
				valid:false,
				touched:false,
				validation:{
					reqired:true,
					email:true
				}
			},
			password:{
				value:"",
				type:"password",
				label:"Пароль",
				errorMessage:"Введите корректный пароль",
				valid:false,
				touched:false,
				validation:{
					reqired:true,
					minLength:7
				}
			}
		}
	}

	loginHandler = ()=>{
	// Form Validation Etap 4

	}

	reginterHandler = ()=>{

	}
	submitHandler = (e) => {
		e.preventDefault();
	}
	validateControl = (value, validation) =>{
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
	onChangeHandler = (event, controlName) =>{
		console.log('controlName', event.target.value);
		// սարքում ենք կրկնորինակներ
		const formControls = {...this.state.formControls};
		const control = { ...formControls[controlName] } 
		// վրշերանշանակում ենք
		control.value = event.target.value;
		control.touched = true;
		control.valid = this.validateControl(control.value, control.validation);
		// փոփոխություններից հետո օրիգինալը փոխում ենք մեր սարքածով
		formControls[controlName] = control;

		// etap 4
		let isFormValid = true;
		Object.keys(formControls).forEach(name=>{
			isFormValid = formControls[name].valid && isFormValid
		})
		this.setState({ 
			formControls, 
			isFormValid
		});
	}

	//Input Generator
	renderInputs = () => {
		return Object.keys(this.state.formControls).map((controlName, index)=>{
			const control = this.state.formControls[controlName];
			return(
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
