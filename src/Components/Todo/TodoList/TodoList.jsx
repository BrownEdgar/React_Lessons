import React from 'react'

import "./TodoList.scss"

export default function TodoList({ data, handleDelete }) {
  return (
    <ul className='List'>
      {data.map(elem => (
        <li className='List-Item' key={elem.id}>
          <span>{elem.text}</span>
          <span
            className='List-DeleteButton'
            role={'button'}
            onClick={() => handleDelete(elem.id)}
          >
            X
          </span>
        </li>
      ))}

    </ul>
  )
}
