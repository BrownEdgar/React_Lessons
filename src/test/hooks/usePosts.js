import React, { useState, useEffect } from 'react'

export default function usePosts() {
	const [posts, setPosts] = useState([])

	useEffect(() => {
			async function getData() {
				const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
				setPosts(response.data)
			}
		getData()
	}, [])
	

	return {posts}
}
