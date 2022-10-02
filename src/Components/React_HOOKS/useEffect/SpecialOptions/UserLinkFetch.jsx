import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'


export default function UserLinkFetch() {
  const [user, setUser] = useState({});
  const id = useLocation().pathname.split("/")[2];

  // case 1 😦
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => {
        setUser(data)
      })

  }, [id])

  // case 2 more better! 😊
  // useEffect(() => {
  //   let unsubscribe = false
  //   fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  //     .then(response => response.json())
  //     .then(data => {
  //       if (!unsubscribe) {
  //         setUser(data)
  //       }
  //     })

  //   return () => {
  //     console.log('canceled!')
  //     unsubscribe = true
  //   }
  // }, [id])

  // case 3 more better! 😊
  useEffect(() => {
    let cancelToken = axios.CancelToken.source()
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`, { cancelToken: cancelToken.token })
      .then(response => setUser(response.data))
      .catch(err => {
        if (axios.isCancel(err)) {
          console.log('canceled!')
        }
      })


    return () => {
      cancelToken.cancel()
    }
  }, [id])


  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <ul>
        <li>
          <Link to={'/users/1'}>Fetch user 1</Link>
        </li>
        <li>
          <Link to={'/users/2'}>Fetch user 2</Link>
        </li>
        <li>
          <Link to={'/users/3'}>Fetch user 3</Link>
        </li>
      </ul>
    </div>
  )
}
