import React from 'react';

function superF(Component) {
	return class SuperF extends React.Component{
		constructor(props){
			super(props);
			this.handleChange = this.handleChange.bind(this);
			this.state={
			}
		}
		handleChange() {
			console.log("handleChange");	
		}

		render(){
			return(
				<div>
					<h1>Vernagir</h1>
					<Component {...this.props} handleChange={this.handleChange} /> 
				</div>
			);
		}
	}
}
export default superF;
