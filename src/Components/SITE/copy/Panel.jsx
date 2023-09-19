import React from 'react'

export default function Panel(props) {
	return (
		<div>
			<aside className='panel' style={props.panelStyle}>
				<h2 className="panel-header">{props.data.header}</h2>
				<p className="panel-info">{props.data.body}</p>
				<button className="panel-button" style={props.buttonStyle}
					onMouseEnter={props._buttonColour}
					onMouseLeave={props._buttonColour}>
					Read More
	</button>

			</aside>
		</div>
	)
}
