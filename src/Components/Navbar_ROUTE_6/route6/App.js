


import React, { useState } from 'react'


import { Routes, Route } from 'react-router-dom'
import Friends from './Friends'
import HomePage from './HomePage'
import Layouts from './Layouts'
import WithParams from './WithParams'
import WithFetch from './WithFetch'

import  './App.css'




export default function App() {
	const [friends, setfriends] = useState(['Rachel Green', 'Monica Geller', 'Phoebe Buffay', 'Joey Tribbiani', 'Chandler Bing', 'Ross Geller']);
	return (
		<div className="container">
			<Routes>
			{/* 
			index ներ հնարավորություն 2 նույն  path-ից խուսափելու համար
			մնացած  path-ը կարող ենք գրել արդեն առանց "/"-ի այն գալիս է 22 տողով*/}
				<Route path="/" element={<Layouts />}>
					<Route index element={<HomePage />}/>
					<Route path="friends" element={<Friends friends={friends}/>}/>
					<Route path="withparams/:id/:model" element={<WithParams />}/>
					<Route path="posts" element={<WithFetch />}/>
					{/* <Route path="*" element={}/> */}
				</Route>
			
				
			</Routes>

		</div>
	)
}
