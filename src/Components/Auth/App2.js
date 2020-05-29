import React, { Component } from 'react'
import Button from './Button/Button'
import Input from './input/Input'
import classes from './App.module.css'
import axios from 'axios'
const accsessApi = process.env.REACT_APP_API_KEY;
console.log('accsessApi', process)
function validateEmail(email) {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
export default class App2 extends Component {
    state = {
        isFormValid:false,
        formsControl:{
            email:{
                type:"email",
                value:"",
                label:"Email",
                valid:false,
                touched:false,
                errorMessage:"Invalid Email",
                validation:{
                    required:true,
                    email:true
                }
            },
            password:{
                type:"password",
                value:"",
                label:"password",
                valid:false,
                touched:false,
                errorMessage:"Invalid Password",
                validation:{
                    required:true,
                    minLength:7,
                }
        }
    }   
    }
    createInputs =()=>{
        return Object.keys(this.state.formsControl).map((InputName, index)=>{
            let control = this.state.formsControl[InputName];
            return(
                <Input
                key={index}
                type={control.type}
                value={control.value}
                label={control.label}
                valid ={control.valid}
                touched={control.touched}
                errorMessage={control.errorMessage}
                shoulValidate={!!control.validation}
                onChange={event=> this.onchangeHandler(event,InputName)}
                />
            )
        })
    } 
    validationControl = ( value, validation) =>{
        if(!validation){
            return true;
        }
        let isValid = true;
        if(validation.required){
            isValid = value.trim() !== '' && isValid
        }
        if(validation.email){
            isValid = validateEmail(value) && isValid 
        }
        if(validation.minLength){
            isValid = value.length >= validation.minLength && isValid
        }
        return isValid;
        
    }
    onchangeHandler = (e, controlName) =>{
        const formCopy = {...this.state.formsControl}
        const control ={...this.state.formsControl[controlName]}
        control.value = e.target.value;
        control.touched= true;
        control.valid= this.validationControl(control.value, control.validation);
        formCopy[controlName] = control;
        let isFormValid = true;
		Object.keys(formCopy).forEach(name=>{
			isFormValid = formCopy[name].valid && isFormValid
		})
        this.setState({ 
            formsControl: formCopy,
            isFormValid
        });
    }
    submitHandler=(e)=>{
        e.preventDefault()
    }
    loginHandler = () =>{}
    registerHandler = async() =>{
        let data = {
            email:this.state.formsControl.email.value,
            password: this.state.formsControl.password.value,
            returnSecureToken:true
        }
        try {          
           let response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${accsessApi}`,data);
           console.log('response',response.data)
        } catch (error) {
           console.log('error', error) 
        }
    }
    render() {
        return (
            <div className={classes.main}>
            <h1>Авторизация</h1>
            <form onSubmit={this.submitHandler}>
             {this.createInputs()}  
             <Button
             type="success"
             onClick={this.loginHandler}
             disabled={!this.state.isFormValid}
             >Login</Button>   
              <Button
             type="primary"
             onClick={this.registerHandler}
             disabled={!this.state.isFormValid}
             >Registration</Button>
            </form>  
            </div>
        )
    }
}
