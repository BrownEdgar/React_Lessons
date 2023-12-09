import { useState } from 'react';
import TodoClear from './Components/TodoList/TodoClear.jsx';
import TodoForm from './Components/TodoList/TodoForm.jsx';
import Todo from './Components/TodoList/TodoList.jsx'

export default function App2() {
  const [todo, settodo] = useState([
    {
      id: Math.random(),
      description: "Learn JavaScript",
      isComplited: false,
    },
    {
      id: Math.random(),
      description: "Learn React.js",
      isComplited: false,
    },
    {
      id: Math.random(),
      description: "Learn Node.js",
      isComplited: false,
    },
  ])
  const addNewTodo = (text = "default task") => {
    settodo([
      ...todo,
      {
        id: Math.random(),
        description: text,
        isComplited: false,
      }
    ])
  }
  const deleteAllisComplited = () => {
    settodo(todo.filter(elem => !elem.isComplited))
  }
  const onDelete = (element) => {
    settodo(todo.filter(elem => elem.id !== element.id))

  }
  const changeStatus = (id) => {
    let newTodo = todo.map(elem => {
      if (elem.id === id) {
        elem.isComplited = !elem.isComplited;
        return elem;
      } else {
        return elem;
      }
    })
    settodo(newTodo)
  }
  return (
    <div>
      <TodoForm addNewTodo={addNewTodo} />
      <Todo todos={todo} changeStatus={changeStatus} onDelete={onDelete} />
      <TodoClear todo={todo} deleter={deleteAllisComplited} />
    </div>
  )
}
