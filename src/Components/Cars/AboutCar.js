import React from 'react'
import { withRouter } from 'react-router-dom';

 function AboutCar(props) {
	console.log(props.match.params.id);
	const id = props.match.params.id;
	return (
		<div>
			{props.carOptions.filter((elem)=>{
				return elem.id === id
			}).map(elem=> <h1>{elem.name}</h1>)}
		</div>
	)
}
export default withRouter(AboutCar)