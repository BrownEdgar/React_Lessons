import { useState, useEffect } from 'react'

export default function FetchData({ url }) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then(res => res.json())
      .then(json => {
        setData(json)
        setLoading(false)
      })
  }, [url])


  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <pre>{JSON.stringify(data, null, 1)}</pre>
  )
}


