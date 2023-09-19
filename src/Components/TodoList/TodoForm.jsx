import React, { useState } from 'react'

export default function TodoForm({addNewTodo}) {
	const [todoText, settodoText] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		addNewTodo(todoText)
		settodoText("");
	}
	const checkValue = (text) => {
		settodoText(text)
	}
	return (
		<form onSubmit={handleSubmit}>
			<input 
				type="text"
				value={todoText}
				onChange={(e)=> checkValue(e.target.value) }
				required/>
			<button>Add</button>
		</form>
	)
}
