import React, { Component } from 'react'
import './App.css';
import { Switch, Route, NavLink } from 'react-router-dom'

import { Navbar, Nav, Container } from 'react-bootstrap';
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Features from './Components/Pages/Features'
import Faq from './Components/Pages/Faq'

export default class App extends Component {


	render() {
		return (
			<>
				<Navbar bg="dark" variant="dark">
					<Container>
						<Navbar.Brand href="#home">
							<img
								alt=""
								src="https://react-bootstrap.github.io/logo.svg"
								width="30"
								height="30"
								className="d-inline-block align-top"
							/>{' '}
							React Bootstrap
						</Navbar.Brand>
						<Nav className="ml-auto">
							<NavLink to='/' className="nav-link">Home</NavLink>
							<NavLink to='/features' className="nav-link">Features</NavLink>
							<NavLink to='/about' className="nav-link">About</NavLink>
							<NavLink to='/faq' className="nav-link">FAQ</NavLink>
						</Nav>
					</Container>
				</Navbar>

				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/features" component={Features} />
					<Route exact path="/about" component={About} />
					<Route exact path="/faq" component={Faq} />
				</Switch>



			</>
		)
	}
}
