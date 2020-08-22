import React, { Component } from 'react'
import classes from './App.module.css'
import Button from './Button/Button'
import Input from './input/Input'
import axios from "axios";

//email validation RegExp
function validateEmail(email) {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
export default class copy extends Component {
    state= {
        isFormValid:false,
        formControls:{
            email:{
                value:"",
                type:"email",
                label: "Email",
                errorMessge:"Sxal Email,krkin pordzeq",
                valid: false,
                touched:false,
                validation:{
                    required:true,
                    email:true
                }
            },
            password:{
                value:"",
                type:"password",
                label: "Password",
                errorMessge:"Sxal password,krkin pordzeq",
                valid: false,
                touched:false,
                validation:{
                    required:true,
                    minLength: 8
                }
            }
        }
    }
    handleSubmit =(e) =>{
        e.preventDefault()
    }
    validatinControl = (value,validation) =>{

    }
    handleChange = (event, inputName) =>{
        const formControls = {...this.state.formControls};
        const control = {...this.state.formControls[inputName]};
        control.value = event.target.value;
        control.touched = true;
        control.valid = this.validatinControl(control.value, control.validation);
        formControls[inputName] = control;
        this.setState({ formControls  });
    }
    handleClickLogin = () =>{
        
    }
    handleClickRegister = () =>{

    }
    createInputs = () =>{
        return Object.keys(this.state.formControls).map((inputName, index)=>{
            const control = this.state.formControls[inputName];
            return (
                <Input
                key={index}
                type={control.type}
                value={control.value}
                label={control.label}
                touched={control.touched}
                souldValidate={!!control.validation}
                errorMessage={control.errorMessage}
                onChange={(e)=>this.handleChange(e,inputName)}
                />
            )
        })
    }
    render() {
        return (
            <div>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.createInputs()}
                    <Button
                    type="primary"
                    onClick={this.handleClickLogin}
                    disabled={!this.state.isFormValid}>Sign In</Button>
                    <Button
                    type="success"
                    onClick={this.handleClickRegister}
                    disabled={!this.state.isFormValid}>Register</Button>
                </form>
            </div>
        )
    }
}
