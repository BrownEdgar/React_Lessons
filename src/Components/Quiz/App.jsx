import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import QuizCreator from './QuizCreator/QuizCreator'
import QuizList from './QuizList/QuizList'
import Header from './Header/Header'
import './App.css'
import Home from './Home/Home'
import TestList from './TestList/TestList'

export default class App extends Component {
	render() {
		return (
			<div>
				<Router>
				<Header/>
					<Switch>
						<Route exact path='/' component={Home} /> 
						<Route exact path='/quizCreator' component={QuizCreator} /> 
						<Route exact path='/quizlist' component={QuizList} /> 
						<Route exact path='/quizlist/:id' component={TestList} /> 
						<Redirect to={"/"}/>
					</Switch>
				</Router>
			</div>
		)
	}
}
