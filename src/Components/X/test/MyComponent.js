import React from 'react'

export default function MyComponent(props) {
	if (props.number > 10) {
		throw new Error("invalid 'number' value!");
	}
	return (
		<div>
			<h1 style={{textAlign:"center"}}> up to 10 Boom! {props.number}</h1>
			<ul>
				<li>getDerivedStateFromError</li>
				<li>componentDidCatch</li>
			</ul>
		</div>
	)
}
