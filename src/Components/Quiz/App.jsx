import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import QuizCreator from './QuizCreator/QuizCreator'
import QuizList from './QuizList/QuizList'
import Header from './Header/Header'
import './App.css'

export default class App extends Component {
	render() {
		return (
			<div>
				<Router>
				<Header/>
					<Switch>
						<Route exact path='/quizCreator' component={QuizCreator} /> 
						<Route exact path='/quizList' component={QuizList} /> 
					</Switch>
				</Router>
			</div>
		)
	}
}
