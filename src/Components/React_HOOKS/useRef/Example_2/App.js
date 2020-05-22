import React, { useContext, useRef, useEffect} from 'react'
import { MyContext } from './Context'
// import Input  from './ForvardInput'
import './App.css'
export default function App() {
	const context = useContext(MyContext);
	const inputEl_1 = useRef(null);
	const inputEl_2 = useRef(null);
	

	useEffect(() => {
		inputEl_1.current.focus();
	}, [])
	const handleSubmit = (e) =>{
		e.preventDefault()
	}
	const handleChangeName = (e) => {
		if (e.key === 'Enter' ) {
			inputEl_2.current.focus();	
		}
	
	}
	const handleChangSurname = (e) => {
		if (e.key === 'Enter') {
			alert("Thanks for Registration!!!")
		}
	}
	
	return (
		<div className={context}>
			<from onSubmit= {handleSubmit} className='myForm'>	
			<input
				type='text'
				ref={inputEl_1}
				placeholder='first name'
				onKeyDown={handleChangeName}
			/>
				<input
				type='text'
				ref={inputEl_2}
				placeholder='last name'
				onKeyDown={handleChangSurname}
				/>
				
			</from>
		</div>
	)
}
