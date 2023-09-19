import React, { Component } from 'react';

class Bomb extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count:0
		  }
	}

	handleClick(){
	
		this.setState(({ count }) => ({
			count: count + 1
		}));
	}

	render() { 
		const { count } = this.state;
		if (count === 6) {
			throw new Error("BoooooooM!!!!!")
		}
		return (
		<div>
		<h1>Bomb Component</h1>
		<button onClick={this.handleClick.bind(this)}>Click me 5 time...{count} </button>
		</div>
		)
	}
}
 
export default Bomb;