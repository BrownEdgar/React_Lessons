import React, { Component } from 'react'
import Context from './Context'

export const MyContext = React.createContext("")

export default class App extends Component {
	state = {
		data: [
			{id:1, title:"Lorem Ispum1"},
			{id:2, title:"Lorem Ispum2"},
			{id:3, title:"Lorem Ispum3"},
			{id:4, title:"Lorem Ispum4"}
		]
	}
	render() {
		return (
			<div>
				<MyContext.Provider value={{ data: this.state.data }}>
					<Context />
				</MyContext.Provider>
				

			</div>
		)
	}
}

