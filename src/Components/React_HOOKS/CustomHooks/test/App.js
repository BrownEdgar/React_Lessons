import React from 'react'
import { Custom } from './Custom'

export default function App() {
	const [product, { increment, decriment, all, resetProduct }] = Custom({
		max: 67, 
		min: 0, 
		step: 1,
		reset: 1,
		initialState: 1
	})
	return (
		<div>
			<h1>Product:{product}</h1>
			<button onClick={decriment}>Decriment</button>	
			<button onClick={increment}>Increment</button>	
			<button onClick={all}>Get ALl</button>	
			<button onClick={resetProduct}>resetProduct</button>	
		</div>
	)
}
