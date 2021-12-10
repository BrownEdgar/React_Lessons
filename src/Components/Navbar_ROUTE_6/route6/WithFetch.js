import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'


export default function WithParams() {
	const [posts, setposts] = useState([])
	
	useEffect(() => {
		fetch(" https://jsonplaceholder.typicode.com/posts")
			.then(response => response.json())
			.then(json => {
				console.log(json);
				setposts(json)
			})
	
	}, [])
	return (
		<div>
			{posts.map(elem => (
				<Link key={elem.id} to={`/posts/${elem.id}`}>
					<li>{elem.title}</li>
				</Link>
			))}
		</div>
	)
}
