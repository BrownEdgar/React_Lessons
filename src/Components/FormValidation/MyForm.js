import React, { Component } from 'react'

export default class MyForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      passwordError: '',
      nameError: "",
      emailError: "",
    }
  }

  // ----------------
  myValidation = () => {
    let nameError = "";
    let emailError = "";
    let passwordError = "";
    if (this.state.name.includes(' ') || this.state.name.match(/[0-9]/g) !== null) {
      nameError = "invalid name, aranc tiv";
    }

    if (!this.state.email.endsWith('.com')) {
      emailError = "invalid email"
    }

    if (!Object.is(this.state.password, this.state.confirmPassword)) {
      console.log("sxal password");
      passwordError = "invalid password"
    }


    this.setState({ nameError, emailError, passwordError });
    if (nameError || emailError || passwordError) {
      return false;
    }
    return true;

  }

  // ----------------
  handleSubmit = (e) => {
    e.preventDefault()
    let r = this.getHeshPassword(this.state.password)
    let stugum = this.myValidation();
    if (stugum) {
      console.log({
        name: this.state.name,
        email: this.state.email,
        password: r,
      });
    }

  }


  getHeshPassword = (params) => {

    let newPassword = ''
    for (let i in params) {
      newPassword += params.charCodeAt(i);
    }
    this.setState({ password: newPassword, confirmPassword: newPassword });
    return newPassword
  }
  // ----------------
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  // ----------------
  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.name}
            name="name"
            placeholder="enter your Name"
            onChange={this.handleChange} />
          <div className="errBox">{this.state.nameError}</div>

          <input
            type="email"
            value={this.state.email}
            name="email"
            placeholder="enter your email"
            onChange={this.handleChange} />
          <div className="errBox">{this.state.emailError}</div>


          <input
            type="password"
            value={this.state.password}
            name="password"
            placeholder="enter your password"
            autoComplete="off"
            onChange={this.handleChange} />
          <div className="errBox">{this.state.passwordError}</div>


          <input
            type="password"
            value={this.state.confirmPassword}
            name="confirmPassword"
            autoComplete="off"
            placeholder="confirm Password"
            onChange={this.handleChange} />
          <div className="errBox">{this.state.passwordError}</div>
          <button type="submit">Send</button>
        </form>
      </div>
    )
  }
}



