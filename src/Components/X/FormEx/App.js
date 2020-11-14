import React, { Component } from 'react'
import Input from './Input';

export default class App extends Component {
	state = {
		email: "",
		surname: ""
	}

componentDidUpdate(prevProps, prevState) {

}
	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	}
	render() {


		return (
			<div>
				<form>
					<Input
						cl="white"
						name="email"
						type="email"
						label="Enter your Email"
						onChange={this.handleChange}
						error={true} />
					<input
						name="surname"
						type="text"
						value={this.state.surname}
						onChange={this.handleChange} />
				</form>
			</div>
		)
	}
}
