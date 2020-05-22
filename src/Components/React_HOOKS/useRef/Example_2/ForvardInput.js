import React from 'react'
function ForvardInput({ type, onKeyDown, plaseholder},ref) {
	return (
		<input
			type={type}
			ref={ref}
			placeholder={plaseholder}
			onKeyDown={onKeyDown}
		/>
	)
}

const forvardInput = React.forwardRef(ForvardInput);
export default forvardInput