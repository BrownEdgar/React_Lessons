import React, { Component } from 'react'
import Clock from './Clock'

export default class App extends Component {
state={
	show:true,
}


	render() {
		return (
			<div>
				{this.state.show && <Clock/>}
				<button onClick={()=> this.setState({show:!this.state.show})}>clear</button>
			</div>
		)
	}
}
