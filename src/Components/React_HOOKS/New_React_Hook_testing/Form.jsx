import React, { useState } from 'react'

import s from "./Form.module.css"

export default function Form({ handleChange }) {


  return (
    <form className={s.Form}>
      <p>
        <input
          type="radio"
          id='users'
          value='users'
          name='json'
          onChange={handleChange}
        />
        <label htmlFor="users">Users</label>
      </p>
      <p>
        <input
          type="radio"
          id='todos'
          value='todos'
          name='json'
          onChange={handleChange}
        />
        <label htmlFor="todos">todos</label>
      </p>
      <p>
        <input
          type="radio"
          id='posts'
          value='posts'
          name='json'
          onChange={handleChange}
        />
        <label htmlFor="posts">posts</label>
      </p>
    </form>
  )
}