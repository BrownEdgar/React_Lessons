import React from 'react'

export default function TodoItem({ todo, changeStatus, onDelete}) {
	return (
		<div>
			<label>
				<input 
				type="checkbox" 
				checked={todo.isComplited}
				onChange={() => changeStatus(todo.id)}/>
				{todo.description}
				<button 
					onClick={() => onDelete(todo)}
				>X</button>
			</label>
		</div>
	)
}
