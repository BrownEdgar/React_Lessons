import React, { Component } from 'react'
import './App.css'
import data from "./data.json"
import Cards from "./Carts"
export default class App extends Component {
	state = {
		data: data.datas
	}
	render() {
		const {data} = this.state;
		return (
			<div className="app">
				<h1>my shopping bag</h1>
				<div className='watch-wrapper'>
					<Cards data={data}/>
				</div>
			</div>
		)
	}
}
