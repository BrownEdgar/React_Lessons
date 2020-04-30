import React from 'react'
import { withRouter } from 'react-router-dom';

function Developers(props) {
	return (
	
		<div onClick={props.onclick}>
			<h1>Name: {props.name}</h1>
			<h4>Position: {props.skilss}</h4>
			<h4>Salary: {props.salary}</h4>
		</div> 
	
	)
}
export default withRouter(Developers)