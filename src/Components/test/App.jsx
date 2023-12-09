import React, { Component } from 'react'

export default class App extends Component {
	state ={
		name: "",
		surname: "",
		selectValue: ""
	}
	handleChanege = (e) =>{
		
		let newName = e.target.value;
		this.setState({ [e.target.name]: newName  });
	}
	selectHandler = (e) => {
		let newName = e.target.value;
		this.setState({ selectValue: newName });
	}
	handleSubmit = (e) =>{
		e.preventDefault();
	}
	render() {
		return (
			<div>
				<h1>input is React</h1>
				<form onSubmit={this.handleSubmit}>
					<input 
					type="text" 
					value={this.state.name}
					name="name"
					onChange={this.handleChanege}/>
					<input
						type="text"
						value={this.state.surname}
						name="surname"
						onChange={this.handleChanege} />
					<select value={this.state.selectValue} onChange={this.selectHandler}>
						<option value=""></option>
						<option value="Javascript">Javascript</option>
						<option value="React.js">React.js</option>
						</select>
						<textarea name="textField"  cols="30" rows="10" maxLength="150">

						</textarea>
						<input type="submit" value="send"/>
				</form>

				<div>
					<p>{this.state.name}</p>
					<p>{this.state.surname}</p>
				</div>
			</div>
		)
	}
}