import React, { Component } from 'react';
import  './Developers.css'


class Developers extends Component {
	state = {
		isOpen:true
	}
	render(){
		return (
			<div className='box'>
				<h1>Name: {this.props.name}</h1>
				<h4>Skilss: {this.props.skilss}</h4>
			</div>
		);
	}
}
export default Developers;