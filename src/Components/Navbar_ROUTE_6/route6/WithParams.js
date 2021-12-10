import React from 'react'
import { useParams } from 'react-router-dom'


export default function WithParams() {
	console.log(useParams())
	const { id, model } = useParams()

	return (
		<div>
			<h1>id:{id}</h1>
			<h1>model:{model}</h1>
		</div>
	)
}
