import React from 'react'
import Selector from './Selector';

export default function Selectors(props) {
	function _handleClick() {
		if (props.data.id !== props.activeID) {
			props._changeActive(props.data.id)
		} else {
			return;
		}
	}
	return (
		<div className="selectors">
			{props.data.map((item) => {
			return (
				<Selector
					key={item.id}
					id={item.id}
					_handleClick={_handleClick}
					
					activeID={props.activeID}
				/>
			)	
			})}
		</div>
	)
}
