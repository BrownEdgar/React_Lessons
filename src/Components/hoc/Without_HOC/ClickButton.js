import React from "react";


class Test extends React.Component {
	state = {
			count: 0
		}
	
	
	incrementvalue = () =>{
		this.setState(prevState =>{
			return { 
				count:prevState.count +1 
			}
		})
	}
	render() {
		const {count} = this.state
		return (
			<>
				<p>{this.props.name}</p>
				<button onClick={this.incrementvalue}>Click {count} angam</button>
				<button onClick={this.props.handleChange}>handleChange</button>
			</>
		)
	}
}
export default Test;