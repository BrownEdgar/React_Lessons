import React, { useState } from 'react'

export const CustomHook = ({
	min =  -10,
	max =  15,
	step =  1,
	initial =  0
}) => {

	const [count, setcount] = useState(initial)
	const inc = () =>{
		setcount(prevCount => count + step > max ? max : count + step )
	}
	const dec = () => {
		setcount(prevCount => count - step < min ? min : count - step)
	}
	const reset = () => {
		setcount(initial)
	}
	return [count, { inc, dec, reset}]
}