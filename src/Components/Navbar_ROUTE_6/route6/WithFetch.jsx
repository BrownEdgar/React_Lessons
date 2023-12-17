import { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'


export default function WithParams() {
  const [posts, setposts] = useState([])

  useEffect(() => {
    fetch(" https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        setposts(json)
      })
  }, [])
  return (
    <ol className='PostList'>
      {posts.map(elem => (
        <Link
          key={elem.id}
          to={`/posts/${elem.id}`}
          data-id={elem.id}
          //լինկ https://ui.dev/react-router-pass-props-to-link
          // useLocation․state-ի մեջ փողանցվում է այս օբյեկտը
          state={{ post: elem }}
        >
          <li>
            {elem.title}
          </li>
        </Link>
      ))}
      <Outlet />
    </ol>
  )
}
