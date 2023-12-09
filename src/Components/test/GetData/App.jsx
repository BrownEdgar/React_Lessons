import React, { useState, useEffect } from 'react'
import { getData } from "./Helpers";


export default function App() {
	const [data, setData] = useState()
	useEffect(() => {
		getD()

	})
	async function getD(params) {
		let newdata = await getData()
		setData(newdata)
	}
	return (
		<div>
			{data && data.name}
		</div>
	)
}

