import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

export default function LoaderData() {
  const todos = useLoaderData()
  return (
    <>
      <h3>
        These data are supplied with the new feature "react-router-dom"
        <mark> createBrowserRouter</mark>,  because BrowserRouter with outdated
      </h3>
      <div className='PostList'>{todos.map((todo,index) => (
        <Link
          key={todo.id}
          to={`/todos/${todo.id}`}
          data-id={todo.id}
        >
          <li>
            {todo.title}
          </li>
        </Link>
      ))}
      </div>
    </>
  )
}



const todoLoader = async ({ request, params }) => {
  console.log({ request, params });
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`)
  return res.json()
}
export { LoaderData, todoLoader }
