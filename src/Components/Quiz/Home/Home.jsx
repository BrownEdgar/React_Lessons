import React from 'react'
import classes from './Home.module.css'

export default function Home(props) {
	return (
		<div className={classes.main}>
			<h1 className={classes.text}>{props.hedding || `Welcome to the Quiz Creator`}</h1>
		</div>
	)
}