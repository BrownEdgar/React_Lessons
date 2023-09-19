

import React, { Component } from 'react'
import axios from "../../axios/axios-quiz"
export default class TestList extends Component {
state = {
	quiz:[],

}
	async componentDidMount() {
		try {
			const response = await axios.get(`/quiz/${this.props.match.params.id}.json`);
			console.log('response.data', response.data)
			const quiz = response.data
			this.setState({
				quiz,	
			})
		} catch (e) {
			console.log(e)
		}
	}
	render() {
		console.log(this.state.quiz)
		return (
			<div>
			<ul>
				{this.state.quiz.map((elem, index)=>{
					return (
						<>
						<li key={index}>{elem.question}</li>
							
						</>
					)
				})}
				</ul>
			</div>
		)
	}
}

