import React, { useState } from 'react'
import Child from './Child'
import './App.css'
import Better from './Better'
export default function App() {
	const [data, setData] = useState([
		{ id: 1, title: 'Marius Vulputate Cros Amet!1', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, numquam nam ratione nulla quae repellendus." },
		{ id: 2, title: 'Marius Vulputate Cros Amet!2', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, numquam nam ratione nulla quae repellendus." },
		{ id: 3, title: 'Marius Vulputate Cros Amet!3', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, numquam nam ratione nulla quae repellendus." }
	])
	return (
		<div className="main">
				<Better data={data}/>
		</div>
	)
}
