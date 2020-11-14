
import React, { Component } from 'react'
import { BrowserRouter as Router, Redirect, Route} from 'react-router-dom'
import Home from './Home'
import Cars from './Cars'
import Contact from './Cars'
import NavbarTest from './NavbarTest'
import AboutCar from './AboutCar'

export default class App extends Component {
	state = {
		cars:[
			{
				id:1,
				name: "Audi",
				year: "2018",
				model: "a7",
				price: "57000",
				image:"https://images.unsplash.com/photo-1561924563-d9ad0f32b23f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
			},
			{
				id: 2,
				name: "BMW",
				year: "2019",
				model: "M5",
				price: "59000",
				image: "https://images.unsplash.com/photo-1556448851-9359658faa54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
			},
			{
				id: 3,
				name: "Mersedes",
				year: "2020",
				model: "GT",
				price: "120000",
				image: "https://images.unsplash.com/photo-1546518071-fddcdda7580a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
			},
		]
	}
	handleClick =(id)=>{
		console.log(id);
	}
	render() {
		return (
			<Router>
				<div>
					<NavbarTest/>
					
					<Route exact path="/" component={Home}/>
					<Route exact path="/cars" render={(props) => <Cars props={props} carOptions={this.state.cars} onClick={ this.handleClick}/>} />
					<Route exact path="/cars/:id" component={AboutCar}/>
					<Route exact path="/contact" component={Contact}/>
					<Redirect to={'/'}/>
				</div>
			</Router>
			
		)
	}
}
