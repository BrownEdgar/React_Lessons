import React from 'react'

export default function BlogComponent(props) {
	return (
		<div>
			<h5>AXONVP <span> 01 AUG, 2019</span></h5>
			<h3>{props.heddings}</h3>
			<p>{props.children}</p>
			<button>Read More</button>
		</div>
	)
}
