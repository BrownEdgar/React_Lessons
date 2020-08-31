import React from 'react'

export const Child = React.memo(({increment})=> {

	return <button onClick={()=> increment(10)}>Increment</button>
})

