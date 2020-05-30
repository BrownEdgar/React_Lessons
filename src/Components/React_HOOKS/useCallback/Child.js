import React from 'react'

export const Child = React.memo(({increment})=> {

	return <button onClick={()=> increment(5)}>Increment</button>
})

