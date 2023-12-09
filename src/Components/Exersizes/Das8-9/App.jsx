////////////////////////////////////////////////////////////////////////////////
// Exercise: Դաս 8
//
// - Գրել կոդ, որը թույլ կտա իմանալ կոմպոնենտի թարմացումների քանակը
// - LifeCycle մեթոդներից մեկով ստուգել մուտքագրված անունը "React" հետ
// 
////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
class App extends Component {
	constructor(props) {
		super(props);
	this.state = {
	inputValue:"Username is...",
	count : 50
	}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
}
	
	handleChange(event) {
		this.setState({ inputValue: event.target.value });
	}
	handleSubmit(event) {
		event.preventDefault();
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (nextState.inputValue.toLowerCase() === "react") {
			nextState.inputValue = `"Username"-ը չի կարող հավասար լինել "React"-ի`
		}
		nextState.count +=1 
		return true;
	}


	render() {
		const { inputValue, count } = this.state;
		return (
			<div>
				<h1>{inputValue}</h1>
				<h1>Թարմացումների քանակ:{count}</h1>
				<form onSubmit={this.handleSubmit}>
         			 <input type="text" placeholder='type here' onBlur={this.handleChange} />
					<input type="submit" value="Отправить" />
				</form>
				</div>
		)
	}
}
export default App;
