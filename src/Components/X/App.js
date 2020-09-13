import React, { useState } from 'react'

function App() {
	const [state, setState] = useState({
		name: "sda",
		surname: "",
		email: ""
	})
	const handleChange = (e) =>{
		//События SyntheticEvent содержатся в пуле. Это означает, что объект SyntheticEvent будет повторно использован, а все его свойства будут очищены после вызова обработчика события. Это необходимо из соображений производительности. Именно поэтому нельзя использовать синтетические события асинхронно.
		e.persist()
		setState(prevState =>({
			
				...prevState,
				[e.target.name]:e.target.value	
			
		}))
	}
	return (
		<div>
			<form action="">
				<input
					type="text"
					name="name"
					value={state.name}
					onChange={handleChange}
				/>
				<input
					type="text"
					name="surname"
					value={state.surname}
					onChange={handleChange}
				/>
				<input
					type="email"
					name="email"
					value={state.email}
					onChange={handleChange}
				/>
			</form>
		</div>
	)
}

export default App
