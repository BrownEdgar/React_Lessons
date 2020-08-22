import React, { Component } from 'react'

export class Pure extends Component {
	render() {
		console.log('render Pure')
		return (
			<div>
				<h1>{this.props.count}</h1>
			</div>
		)
	}
}

export default Pure
