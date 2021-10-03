import React, { Component } from 'react'
import Welcome from './Welcome';
import ErrorHandler from './ErrorHandler';
export default class App extends Component {
	render() {
		return (
			<div>
				<ErrorHandler>
					<Welcome name="warning name" />	
				</ErrorHandler>		
				<ErrorHandler>
					<Welcome name="warning name2" />
				</ErrorHandler>			
			</div>
		)
	}
}
