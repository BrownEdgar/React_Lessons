////////////////////////////////////////////////////////////////////////////////
//  About React Hooks:
// Հուկերը ցիկլերի և if-րի մեջ օգտագործել չի կարելի
// X this.state
// X this.setState()
// X handleChangeName.bind(this)
// documentation -  Хуки — нововведение в React 16.8, которое позволяет использовать состояние и другие возможности React без написания классов.
////////////////////////////////////////////////////////////////////////////////
import React, { useState }  from 'react'
import "../index.css"
export default function FinctionalApp() {
	const myState = useState(0);
	let count = myState[0];
	let setCount = myState[1];
	// const [count, setCount] = useState(0);

	const inctementHandler = () => {
		//setCount(count + 1 );
		//prevState == prevCount
		setCount(prevCount => prevCount + 1 );
	}
	return (
		<div className="main">
			<h1>With Hooks!</h1>
			<h2>useState()</h2>
			<button onClick={inctementHandler}>Increment Me {count}</button>
		</div>
	)
}

