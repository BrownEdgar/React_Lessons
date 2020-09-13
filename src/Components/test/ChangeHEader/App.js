import React,{useState} from 'react'

export default function App() {
	const [headding, setHeadding] = useState("Default headding");
	const [boll, setBoll] = useState(true)
	function changeTitle(e){
		setHeadding(e.target.value)
	}

	let content = boll 
	? <h1>{headding}</h1> 
	: <input type="text" value={headding} onChange={changeTitle} onBlur={() => setBoll(!boll)} />
	return (
		<div onDoubleClick={() => setBoll(!boll)}>
			{content}
			
		</div>
	)
}
