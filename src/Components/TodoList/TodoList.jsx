import React, { useState } from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ todos, changeStatus, onDelete}) {
	
	return (
		<div>
		{todos.map((elem, index) => {
		return (
			<TodoItem 
			key={elem.id} 
			todo={elem} 
			changeStatus={changeStatus}
			onDelete={onDelete}/>
		)
		
		})
		}
		</div>
	)
}
