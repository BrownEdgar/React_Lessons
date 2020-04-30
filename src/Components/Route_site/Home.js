import React from 'react'
const divStyle = {}

	divStyle.main = {
		textAlign: "center",
		color: 'red',
		height: "100vh",
		backgroundImage: `url("https://images.unsplash.com/photo-1588200908342-23b585c03e26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80")`,
		backgroundPosition: "center",
		backgroundRepeat:"no-repeat",
		backgroundSize:"cover"
	}
divStyle.text = {
	paddingTop:"22%",
	color:"#142629",
	fontFamily:"Arial"
}
export default function Home() {
	
	return (
		<div style={divStyle.main}>
			<h1 style={divStyle.text}>Welcome to the React Website!</h1>
		</div>
	)
}
