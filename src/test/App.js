import React from 'react'
import usePosts from './hooks/usePosts'

export default function App() {
	const { posts } = usePosts()
	return (
		<div>
			<pre>
				{JSON.stringify(posts, null, 1)}
			</pre>
		</div>
	)
}
