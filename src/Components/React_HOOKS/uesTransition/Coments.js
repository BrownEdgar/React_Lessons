import React from 'react'

export default function Coments({ data }) {
  console.log('data', data)
  return (
    <ul id='list'>
      {data.map(coment => {
        return (
          <li key={coment.id} className="list-item">
            <span className='title'>{coment.name}</span>
            <span>{coment.body}</span>
            <span className='special_number'>{coment.id}</span>
          </li>
        )
      })}
    </ul>
  )
}
