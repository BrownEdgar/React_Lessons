import React from 'react'
import PropTypes from 'prop-types';
import { Card } from '@material-ui/core';
import Cart from './Cart';
export default function Carts(props) {
	return (
		<>
			{props.data.map((elem) =>(
				<Cart 
					key={elem._id}
					id={elem._id}
					title={elem.title}
					price={elem.price}
					url={elem.url}
					size={elem.size}
					quaintity={elem.quaintity}
					/>
			))}
		</>
	)
}
Carts.propTypes = {
	data: PropTypes.array.isRequired,
}