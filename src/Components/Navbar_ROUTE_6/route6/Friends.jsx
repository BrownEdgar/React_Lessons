import React from 'react'

export default function Friends(props) {
	return (
		<div>
			{props.friends.map((elem,index) => {
				return (
					<p key={index}>
						name: {elem}
					</p>
				)
			})}
		</div>
	)
}
