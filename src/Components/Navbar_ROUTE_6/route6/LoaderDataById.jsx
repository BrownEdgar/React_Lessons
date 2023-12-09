/////////////////////////////////////////////
// ՄԵզ այս մոտեցման մեջ այլևս պետք չէ [useParams, fetch useEffect]
// 
/////////////////////////////////////////////


import React from 'react'
import { useLoaderData } from 'react-router-dom';

export default function LoaderDataById() {
  const { todo, id } = useLoaderData()
  return (
    <div>
      <>
        <h2>Title: {" "} {todo.title}</h2>
        <h3>completed: {todo.completed.toString()}</h3>
      </>
    </div>
  )
}


const todoByIdLoader = async ({ params }) => {
  const id = params.id;
  console.log({ params });
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
  const todo = await res.json()
  return { todo, id }
}

export { LoaderDataById, todoByIdLoader }