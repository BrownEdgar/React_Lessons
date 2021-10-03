import React, {useState, useEffect} from 'react'

export default function App() {
	// const myState = useState(0);
	// console.log(myState);
	const [count, setCount] = useState(0);
	const [name, setname] = useState("React.js")
	const [data, setdata] = useState(null)

  useEffect(() => {
	  console.log("count changed");
	  return () => {
		  console.log("😪");
	  }
  }, [])
	const changeCount = () => {
		
		setCount((prevCount) => prevCount + 1);//1
		setCount((prevCount) => prevCount + 1);//2
	}
	return (
		<div>
			<h1>{count} {name}</h1>
			<button onClick={changeCount}>add</button>
		</div>
	)
}
