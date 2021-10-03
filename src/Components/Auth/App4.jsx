import React, { Component } from 'react'
import s from './App.module.css'
import Button from './Button/Button';
import Input from './input/Input';
import axios from "axios"


function validateEmail(email) {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

const API_KEY = process.env.REACT_APP_API_KEY;

export default class App4 extends Component {

	state = {
		isFormValid: false,
		formControls: {
			email: {
				value: '',
				type: "email",
				label: "Enter Your Email",
				errorMessage: 'invalid E-mail',
				valid: false,
				touched: false,
				validation: {
					required: true,
					email: true
				}
			},
			password: {
				value: '',
				type: "password",
				label: "Your password",
				errorMessage: 'invalid password',
				valid: false,
				touched: false,
				validation: {
					required: true,
					minLength: 7,
					hasNumber: true,
				}
			}
		}
	}

	validateControl = (value, validation) => {
		
	}
	onChangeHandler = (event, controlName) =>{
	
	}

	renderInputs = () => {
	
				/>
			)
		})
	}
	registerHandler = async() => {
	
		}
    try {
			let response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, data);
			console.log(response)
		} catch (error) {
			console.error(error)
		}
		
	}
	loginHandler = async () => {
		const data = {
			email: this.state.formControls.email.value,
			password: this.state.formControls.password.value,
			returnSecureToken: true
		}
		try {
			let response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, data);
			console.log(response)
		} catch (error) {
			console.error(error)
		}

	}		
	handlerSubmit = (e) => {
		e.preventDefault()
	}
	render() {
		return (
			
		)
	}
}
