import React, { Component } from 'react'

export default class App extends Component {
  state = {
    formControls: {
      email: {
        type: "email",
        value: ''
      }
    }

  }
  submitHandler = (e) => {
    e.preventDefault();
  }
  handleChange = (e) => {
    this.setState({
      // Սխալ է կմնա միայն value հատկութկությունը
      formControls: {
        email: {
          value: e.target.value
        }
      }
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input type="text"
            value={this.state.formControls.email.value}
            onChange={this.handleChange}
          />
        </form>
      </div>
    )
  }
}
