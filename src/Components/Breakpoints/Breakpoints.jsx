import React from 'react'
import useStyles from '../makeCss/style'
export default function Breakpoints() {
	const classes = useStyles()
	return (
		<div className={classes.container}>
			<h1>Maretial Breakpoints</h1>
		</div>
	)
}
