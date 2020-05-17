import React, { useRef } from 'react'

export default function FunctionalRef() {
	const inputEl = useRef(null);
	const onButtonClick = () => {
		// `current` մատնանշում է `input`-ը
		inputEl.current.focus();
	};
	return (
		<>
			<input ref={inputEl} type="text" />
			<button onClick={onButtonClick}>Focus</button>
		</>
  );
}
	