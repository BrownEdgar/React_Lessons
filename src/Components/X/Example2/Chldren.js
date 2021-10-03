import React from 'react'
import { MyContext } from './App'
export default function Chldren(props) {
	return (
		<div>
			<MyContext.Consumer>
				{(value) =>  value.data.map(elem => {
					return <p key={elem.id}>{elem.title}</p>
				})}
			</MyContext.Consumer>
		</div>
	)
}
