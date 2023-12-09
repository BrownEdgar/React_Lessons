import React from 'react'
function ForvardInput({ type, onKeyDown, placeholder}, ref) {
	return (
		<input
			type={type}
			ref={ref}
			placeholder={placeholder}
			onKeyDown={onKeyDown}
		/>
	)
}

const forvardInput = React.forwardRef(ForvardInput);
export default forvardInput