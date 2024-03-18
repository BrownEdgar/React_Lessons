import { useEffect, useState, useTransition } from 'react'
import Coments from './Coments'
import './App.css'


const comentsFilter = (coments, search) => coments.filter(item => item.name.concat(item.body).includes(search))

export default function App() {
  const [coments, setComents] = useState([])
  const [search, setSearch] = useState([])
  const [isPending, startTransition] = useTransition() // 1

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?_limit=150`)
      .then(response => response.json())
      .then(setComents)
  }, [])
  const handleSearch = (event) => {
    const { value } = event.target;
    startTransition(() => setSearch(value)) // 2
    // setSearch(value)
  }

  return (
    <div className='container'>
      <h1>
        useTransition hook
      </h1>
      <form>
        <input type="text" onChange={handleSearch} />
      </form>
      {/* {isPending && <h1>Pending....</h1>} */}
      <Coments data={comentsFilter(coments, search)} />
    </div>
  )
}
