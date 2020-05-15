////////////////////////////////////////////////////////////////////////////////
//  About React Hooks: useEffect
//  X componentDidUpdate()
// useEffect()-կաշխատի և կկանչի իր մեջի ֆունկցիան ամեն մի props, state փոփոխության, render-ից հետո
// []-  Կաշխատի միայն մեկ անգամ
////////////////////////////////////////////////////////////////////////////////
import React, { useState, useEffect}  from 'react'
import "../index.css"
export default function FinctionalApp() {
	// const myState = useState(0);
	// let count = myState[0];
	// let setCount = myState[1];
	 const [count, setCount] = useState(0);
	const [mousePosition, setMousePosition] = useState({x: null, y: null});


	const inctementHandler = () => {
		//setCount(count + 1 );
		//prevState == prevCount
		setCount(prevCount => prevCount + 1 );
		
	}
	
//----------------------- add -----------------------
useEffect(() => {
	document.title = `Clickeld ${count} times`;
	//handleMouseMove-ը  առանց this-ի
	window.addEventListener("mousemove", handleMouseMove);
	//componentWillUnmount()
	return () =>{
		window.removeEventListener("mousemove", this.handleMouseMove);
	}
},[])
	const handleMouseMove = event => {
		setMousePosition({
			x: event.pageX,
			y: event.pageY,
		})
	}
//----------------------- add -----------------------
	return (
		<div className="main">
			<h1>With Hooks!</h1>
			<h2>useEffect()</h2>
			<button onClick={inctementHandler}>Increment Me {count}</button>
			<hr />
			<h2>x position : {JSON.stringify(mousePosition, null, 2)}</h2>
			{/* կամ */}
			<h2>x position : {mousePosition.x}</h2>
			<h2>y position : {mousePosition.y}</h2>
		</div>
	)
}

