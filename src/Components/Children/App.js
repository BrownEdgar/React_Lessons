import React, { Component } from 'react'
import MyComponent from './MyComponent'

class App extends Component {
	state ={
		data:[
			{
				description: "1Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id impedit eum accusantium maiores optio sequi porro, voluptatem aliquam quae sint facere tempore?"
			},
			{
				description: "1Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id impedit eum accusantium maiores optio sequi porro, voluptatem aliquam quae sint facere tempore?"
			}
		]
	}
	
	render() {
		return (
			<div>

				<MyComponent name={33}>

					{/* <p>"1Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id impedit eum accusantium maiores optio sequi porro, voluptatem aliquam quae sint facere tempore?"
					<span>sdadlsd  SPAN</span>
					</p>
					<p>{this.state.data[0].description}</p>
					<p>"1Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id impedit eum accusantium maiores optio sequi porro, voluptatem aliquam quae sint facere tempore?"</p>
					<p>{this.state.data[1].description}</p> */}
				
				</MyComponent>
			</div>
		)
	}
}

export default App
