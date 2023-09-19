import React, { Component } from 'react'
import Bomb from './Bomb';

export default class App extends Component {
	state = {
		number: 0,
		error: false
	}
	componentDidCatch(error, info) {
		console.log(error);
		this.setState({ error  });
	}
	heandlerClick = () => {
		this.setState({ number:this.state.number + 1  });
	}
	render() {
		const {error, number } = this.state;
		return (
			<div>
			{error 
			? <h1>{error.toString()}</h1>
			: <Bomb number = {number}/> }
			<button onClick={this.heandlerClick}>add</button>
			</div>
		)
	}
}
