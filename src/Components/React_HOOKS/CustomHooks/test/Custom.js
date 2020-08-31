import React, { useState } from 'react'

export const Custom = ({
	max = 67,
	min = 0, 
	step = 1,
	reset = 1,
	initialState = 1}) => {
	const [product, setproduct] = useState(initialState);

	const increment =  () =>{
		setproduct(prevState => prevState + step > max ? max : prevState + step )
	} 
	const decriment = () => {
		setproduct(prevState => prevState - step < min ? min : prevState - step)
	}
	const resetProduct = () => {
		setproduct(reset)
	}
	const all = () => {
		setproduct( max )
	}
	return [product, { increment, decriment, all, resetProduct}]
}
