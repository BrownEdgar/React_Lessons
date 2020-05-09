import React, { Component } from 'react'
import classes from './QuizList.module.css'
import {NavLink} from "react-router-dom"
import { BrowserRouter as Router } from 'react-router-dom'
import axios from "../../axios/axios-quiz"

export default class QuizList extends Component {
	state= {
		quizes:[]
	}

	// դիմելու է "firebase"-ում առկա բոլոր թեստերին
	renderQuizes = () =>{
		return this.state.quizes.map((quiz, index)=>{
			return (
				<li
					key={quiz.id}>
				<NavLink to={'/quiz/' + quiz.id}>
					{quiz.name}
				</NavLink>
				</li>
			)
		})
	}
	render() {
		return (
			<Router>
			<div className={classes.QuizList}>
			<div>
				<h1>Список тестов</h1>
				<ul>
					{this.renderQuizes()}
				</ul>
			</div>
			</div>
			</Router>
		)
	}
	async componentDidMount() {
		try {
		const response = await axios.get("/quiz.json");	
			const quizes =[];
		Object.keys(response.data).forEach((key, index)=>{
			quizes.push({
				id:key,
				name:`Тест N${index + 1}`
			})
		})
			this.setState({quizes});
		} catch (error) {
			console.log('error', error)
		}
	}
}
