////////////////////////////////////////////////////////////////////////////////
//  About React Hooks: useContext
//  Նախատեսված է ֆունկցիոնալ կոմպոնենտում "Context" ավելացնելու համար
// 	առանց <Provider> | <Consumer>
//
////////////////////////////////////////////////////////////////////////////////
import React, { useContext } from 'react'
import { MyContext, AnotherContext } from './Context'

export default function App() {
	const context = useContext(MyContext);
	const context2 = useContext(AnotherContext);
	return (
		<div className={context2}>
			<h1>{context}</h1>
			
		</div>
	)
}
