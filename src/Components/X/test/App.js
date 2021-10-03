import React, { Component } from 'react'
import MyComponent from './MyComponent'

export default class App extends Component {
	state = {
		number: 0,
		error: false
	}

	componentDidCatch(error, info) {
		this.setState({
			...this.state,
			error: error
		});
	}
	
	render() {
		const {number,error} = this.state
		return (
			<div style ={{textAlign: "center"}}>
				{!error 
				? <MyComponent number={number} /> 
				: <h1>Something is wrong</h1>}
				<button 
				onClick={()=> this.setState({ number:this.state.number + 1  })}>add</button>
			</div>
		)
	}
}
