import React from 'react'
import Child from './Child'

export default function Better(props) {
	return (
			<>
			{props.data.map(elem => (
				<Child>
					<span>Axon Vip | 01 Aug 2019</span>
					<h3>{elem.title}</h3>
					<p>{elem.description}</p>
					<button>Read more</button>
				</Child>
				
			))}
			</>
	)
}
