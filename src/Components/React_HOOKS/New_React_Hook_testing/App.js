import React, { Suspense, useState } from 'react'
import Form from './Form'

import s from "./App.module.css"
const FetchData = React.lazy(() => import('./FetchData'));



export default function App() {
  const [value, setValue] = useState('users')

  const handleChange = (e) => {
    setValue(e.target.value)
  }
  return (
    <div className={s.App}>
      <Form handleChange={handleChange} />
      <Suspense fallback={<h2>Loaging....</h2>}>
        <FetchData url={`https://jsonplaceholder.typicode.com/${value}`} />
      </Suspense>
    </div>
  )
}