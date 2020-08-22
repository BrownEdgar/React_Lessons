import React, { Component } from 'react'
import Navbar from './Navbar'
import Users from './Users'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import About from './About'
import Blog from './Blog'
import Contact from './Contact'
import Home from './Home'



export default class App extends Component {
	render() {
		return (
			<Router>
			<div>
				<Navbar/>
			
				<Route exact path="/" component={()=><Home name="HOme page"/>}/>
				<Route exact path="/users" render={()=> <Users pageName="users Page"/>}/>
				<Route  path="/about" component={About}/>
				<Route exact path="/blog" component={Blog}/>
				<Route exact path="/contact" component={Contact}/>
				<Redirect  to={'/'}/>
			
				
			</div>
			</Router>
		)
	}
}
