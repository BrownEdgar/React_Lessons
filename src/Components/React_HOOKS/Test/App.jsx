import React from 'react'
import { CustomHook } from './CustomHook'
export default function App() {
	const [count, { inc, dec, reset }] = CustomHook({
		min:-10,
		max:15,
		step:1,
		initial:0
	})
	return (
		<div>
			<h1>{count}</h1>
			<button onClick={inc}>+</button>
			<button onClick={dec}>-</button>
			<button onClick={reset}>reset</button>
		</div>
	)
}
