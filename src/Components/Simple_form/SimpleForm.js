import React from 'react'

export default function SimpleForm(props) {
	return (
		<div>
			<form onSubmit={props.handleSubmit}>
				<label>
					Имя:
          		<input type="text" value={props.currentValue} onChange={props.onChange} />
				</label>
				<input type="submit" value="Отправить"/>
			</form>
		</div>
	)
}
