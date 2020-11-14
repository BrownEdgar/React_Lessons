import React from 'react'
import s from './Car.module.css'
export default function Car(props) {
	return (
		<div className={s.main_box} onClick={() => props._onClick(props.id)}>
				<div>
					<img src={props.image} alt="avto" />
				</div>
				<div>
					<p>name:{props.name}</p>
					<p>:model:{props.model}</p>
					<p>year:{props.year}</p>
					<p>price:{props.price}</p>
				</div>
			</div>

	)
}
