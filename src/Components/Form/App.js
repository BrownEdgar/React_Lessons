import React, { Component } from 'react'
import Form from './Form'

export class App extends Component {
	state = {
		loginValue: null,
		password: null,
		title: "Hedding"
	}

	changeInputValue = (event) => {
		//name-in hamarjeq state-um arka hatkutyan popoxum
		const name = event.target.name;
		this.setState({ [name]: event.target.value });

	}

	handleSubmit = (event) => {
		alert(`Login : ${this.state.login}
								password : ${this.state.password}`)
		event.preventDefault();
	}
	render() {
		return (
			<div>
				<h1>{this.state.title}</h1>
				<Form value1={this.state.value1}
					value2={this.state.value2}
					func={(e) => this.changeInputValue(e)}
					func2={(e) => this.changeInputValue(e)}
					handleSubmit={(e) => this.handleSubmit(e)} />
			</div>
		)
	}
}

export default App
