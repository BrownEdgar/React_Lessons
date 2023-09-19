import React from 'react'

export default function Welcome(props) {
	if (props.name === 'warning name') {
		throw new Error('My Error')
	}

	return (
		<div>
			<h2>Welcome component run without any 'errors'</h2>
			<h4>Authors:</h4>
			<ul>
				<li>getDerivedStateFromError</li>
				<li>componentDidCatch</li>
			</ul>	
			<button>Generate Error</button>	
		</div>
	)
}
