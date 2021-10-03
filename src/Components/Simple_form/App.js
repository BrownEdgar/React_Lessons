//////////////////////////////////////////////////////////////////////////////////////////////////////
// React Forms:
//
// - React-ում Ֆորմայի HTML Էլեմենտները փոքր-ինչ տարբերվում են DOM- ի մնացած տարրերից քանի 	որ նրանք ի սկզբանե ունեն ներքին վիճակ:
// - <textarea>-ն որպես տեքստ ցուցադրում է children- իր մեջի գրածը.Ունի նաև value ատրիբուտ, որտեղ կարելի է տեղադրել state-ից արժեք
// - select in HTML --> <option selected value="coconut">Кокос</option>
// - selected-ի փոխարեն React-ը օգտագործում է value, որը նշվում է state-ում, և ունենում է handleChange ֆունկցիա, որը փոփոխում է այն
// - select in React --> <select value={this.state.value} onChange={this.handleChange}> + this.state = {value: 'coconut'};
// - link https://codepen.io/gaearon/pen/JbbEzX?editors=0010
// - <input type="file"> հետո --> https://ru.reactjs.org/docs/uncontrolled-components.html#the-file-input-tag
// - Օրինակ React.createRef()-ով --> https://codepen.io/gaearon/pen/WooRWa?editors=0010 
// - неуправляемые компоненты опираются на DOM в качестве источника данных 
/////////////////////////////////////////////////////////////////////////////////////////////////////



import React, { Component } from 'react'
import SimpleForm from './SimpleForm'
import './App.css'
export default class App extends Component {
	
	constructor(props) {
		super(props);
		this.state = { 
			value: 'Use Input in React',
			count: 0,
			valueForSelect: 'Java_Script',
			valueForTextArea: 'Обратите внимание, что мы инициализировали this.state.value в конструкторе, так что в текстовой области изначально есть текст.',
			valueForLogin:null,
			valueForPassword:null,
			
		 };
	
		this.handleChange = this.handleChange.bind(this);
		this.handleChangeForSelect = this.handleChangeForSelect.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleSubmit2 = this.handleSubmit2.bind(this);
		this.changeCounter = this.changeCounter.bind(this);
		this.multipleLoginChange = this.multipleLoginChange.bind(this);
		this.multiplePasswordChange = this.multiplePasswordChange.bind(this);
	}

	handleSubmit2(event) {
		alert(`Login:${this.state.valueForLogin} 
				password:${this.state.valueForPassword}`);
		event.preventDefault();
	}
	handleSubmit(event) {
		alert('Отправленное имя: ' + this.state.value);
		event.preventDefault();
	}
	// setInterval -ի օրինակ--> ավելի լավ օրինակը տես Reaact -ի գլխավոր էջում
	// changeCounter() {
	// 	let r = setInterval(() => {
	// 		this.setState({ count: this.state.count + 1 });	
	// 		if (this.state.count === 10) {
	// 			clearInterval(r)
	// 		}
	// 	}, 1000);
	// }

	handleChange(event) {
		this.setState({ value: event.target.value });
	}
	handleChangeForSelect(event) {
		this.setState({ valueForSelect: event.target.value });
	}
	changeCounter() {
		this.setState({ count: this.state.count + 1 });	
	}


	multipleLoginChange(event) {
		const name = event.target.name;

		//state.value === input.name պայմանի դեպքում
		this.setState({
			[name]: event.target.value
		});
	}

	multiplePasswordChange(event) {
		this.setState({ valueForPassword: event.target.value });
	}

	render() {
		
		return (
			<div>
			<h1>{this.state.value}</h1>
				<SimpleForm
					currentValue={this.state.value}
					onChange={(e) => this.handleChange(e)}
					handleSubmit={(e) => this.handleSubmit(e)}
				/>
				<form onSubmit={this.handleSubmit}>
					<label>
						Имя:
         			 <input type="text" placeholder='type here' onChange={this.handleChange} />
					</label>
					<hr />
					<h3>{this.state.valueForSelect}</h3>
					
					{/* select */}
					<label>
						Ընտրեք Ձեր սիրած լեզուն:
          			<select value={this.state.valueForSelect} onChange={this.handleChangeForSelect}>
						<option value="React.js">React.js</option>
						<option value="Java_Script">Java Script</option>
						<option value="Html_Css">Html Css</option>
						<option value="Hayeren">Hayeren</option>
					</select>
					</label>
				<hr/>

					{/* textarea */}
					<textarea>
						Доброго здоровья, тут просто немного текста внутри тега textarea
					</textarea>
					<textarea value={this.state.valueForTextArea} onChange={this.handleChange} />
					<input type="submit" value="Отправить" />
				</form>

				<hr />
				{/* Increment Button */}
				<h2>Increment Button </h2>
				<h2>{this.state.count}</h2>
				<button 
				onClick={this.changeCounter}>Increment</button>
				
				<button
				onClick={() => this.setState({ count: this.state.count - 1 })}>Decrement</button>
				<hr />
				{/* multiple input */}
				<form onSubmit={this.handleSubmit2}>
					<p><label>
						login:
         			 <input
					name="valueForLogin"
					type="text"
					placeholder={this.state.valueForLogin} 
					onChange={this.multipleLoginChange} />
					</label></p>
					<p><label>
						password:
         			<input
					name="valueForPassword"
					type="password"
					placeholder={this.state.valueForPassword}
							onChange={this.multipleLoginChange} />
						</label></p>
					<input type="submit" value="Отправить" />
					</form>
			</div>
		
		);
	}
}