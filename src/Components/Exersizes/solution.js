////////////////////////////////////////////////////////////////////////////////
// Exercise:
//
// - Ցույց տալ `DATA.title` արժեքը <h1>-ի մեջ 
// - Ցույց տալ <ul> թեգ ամեն մի  `DATA.items` Էլեմենտներով <li>-ի մեջ
// - Հետո ցույց տալ միայն ՝type: "mexican"՝ <li>-ը, (հուշում: կիրառեք this.state.items.filter(...))
// 
////////////////////////////////////////////////////////////////////////////////

import React, { Component } from 'react'

export class Exercise extends Component {
	state = {
		title: "Menu",
		items: [
			{ id: 1, name: "tacos", type: "mexican" },
			{ id: 2, name: "burrito", type: "mexican" },
			{ id: 3, name: "tostada", type: "mexican" },
			{ id: 4, name: "mushy peas", type: "english" },
			{ id: 5, name: "fish and chips", type: "english" },
			{ id: 6, name: "black pudding", type: "english" }
		]
	};

	render() {
		let result = this.state.items
		.filter(item  => item.type === "mexican" )
		.map((elem, index) => <li key={index}>{elem.name}</li>)
			
		
		return (
			<div>
				<h1>{this.state.title}</h1>
				<ul>
					{result}
				</ul>
			</div>
		)
	}
}

export default Exercise



