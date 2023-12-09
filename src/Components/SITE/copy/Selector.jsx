import React from 'react'

export default function Selector(props) {
	let cl = 'selector';
	if (props.activeId === props.id) {
		cl = 'selector active';
	}
	return (
		<div
		 className={cl}
		 onClick={()=> props._handleClick()}
		>
		</div>
	)
}
