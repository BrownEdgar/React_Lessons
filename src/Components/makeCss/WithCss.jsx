import React from 'react'
import useStyles from './style'
// import { makeStyles } from '@material-ui/core/styles'
// const useStyles = makeStyles((theme) => ({
// 	container:{
// 		backgroundColor: theme.palette.background.paper
// 	}
// }))


export default function WithCss() {
	const classes = useStyles()
	return (
		<div className={classes.container}>
			<h1>@material-ui <span>makeStyles</span></h1>
			<button className={classes.btn}>button</button>
		</div>
	)
}
