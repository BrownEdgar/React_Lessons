////////////////////////////////////////////////////////////////////////////////
// useColback հուկը վերադարձնում է ՛մեմոիզացված՛ Colback-function, որը փոխվում է միայն կախվածություններից  մեկի արժեքը փոխելու դեպքում:
//useCallback(fn, deps)  === useMemo(() => fn, deps).- այս 2 գրառումներն նույն բանն են անում
//// link --> https://youtu.be/-Ls48dd-vJE
////////////////////////////////////////////////////////////////////////////////
import React, { useState, useCallback,useEffect } from 'react'
import "./App.css"
import { Child } from './Child';
export default function App() {
	const [count, setCount] = useState(0);

	const clickHandler = useCallback((n) => {
		setCount(count => count+n)
		},[setCount]);
	// useEffect(() => {
	// }, [clickHandler])
	return (
		<div className="box">
			<h1>useCallback hook</h1>
			<h3>count: {count}</h3>
			
			<Child increment={clickHandler}/>
		</div>
	)
}


