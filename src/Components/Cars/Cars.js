import React from 'react'
import Car from './Car';

export default function Cars(props) {
	console.log(props);
	const main = {
		"width": "100%",
		"height": "800px",
		"backgroundColor": "#333",
		"display": "flex",
		"justifyContent":"space-around",
		"alignContent":"center",
		"flexDirection": "row",
		"flexWrap": "nowrap",
		"margin": "5px",
	}
	
	return (
		<div style={main}>
			{props.carOptions.map(elem =>{
				return <Car 
				key={elem.id}
				id={elem.id}
				name={elem.name}
				model={elem.model}
				year={elem.year}
				price={elem.price}
				image={elem.image}
				_onClick={(id)=> props.onClick(elem.id)}
				/>
			})}
		</div>
	)
}

