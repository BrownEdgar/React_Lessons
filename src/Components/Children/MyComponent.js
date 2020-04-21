import React from 'react'
import PropTypes from 'prop-types'


export default function MyComponent(props) {
		const divStyle = {
			display:"block",
			width:'250px',
			height:'auto'
		}
	return (
		<div className={divStyle}>
		<p>{props.name}</p>
		<p>{props.surname}</p>
		<p>{props.age}</p>
		<p>{props.gender}</p>
		<p>{props.phone}</p>
			
		</div>
	)
}

MyComponent.defaultProps = {
	name: "default name",
}

MyComponent.propTypes = {
	// check Here
};
