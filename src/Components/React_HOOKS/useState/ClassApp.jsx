import React, { Component } from 'react'
import "../index.css"

export default class ClassApp extends Component {
	state = {
		count: 0,
		name:"React"
		
	}
	inctementHandler = () => {
		this.setState({ count: this.state.count + 1  });
	}
	render() {
		return (
			<div className="main">
			<h1>With Classes</h1>
				<button onClick={this.inctementHandler}>
					Increment Me {this.state.count}
					</button>
					<p>{this.state.name}</p>
			</div>
		)
	}
}
