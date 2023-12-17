import { useState } from 'react'
import TodoList from './TodoList/TodoList'

import "./App.scss"

export default function App() {

  const [data, setData] = useState({
    text: "",
    items: [],
  })


  const handleSubmit = (e) => {
    e.preventDefault()


    const newTodo = {
      text: data.text,
      id: Date.now()
    }
    setData(prevData => {
      return {
        items: [...prevData.items, newTodo],
        text: '',
      }
    })
  }

  const handleChange = (e) => {
    console.log('e.target.value', e.target.value)
    setData({ ...data, text: e.target.value });
  }
  const handleDelete = (id) => {
    const newItems = data.items.filter(todo => todo.id !== id)
    setData({ ...data, items: newItems });
  }
  return (
    <div className='Container'>
      <h1 className='Container-Title Container-Title_md' >You have {data.items.length} Todos</h1>
      <TodoList data={data.items} handleDelete={handleDelete} />
      <form className='Form' onSubmit={handleSubmit}>
        <div className='FormGroup FormGroup-Message'>
          <input
            type="text"
            onChange={handleChange}
            placeholder='Enter Item'
            value={data.text}
            required />
        </div>
        <div className='FormGroup FormGroup-Submit'>
          <input type="submit" value='add' />
        </div>
      </form>
    </div>
  )
}
