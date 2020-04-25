import React,{Component} from 'react';
import Divs from './Divs.js';
import AddNumber from './Number.js'


export default class App extends Component{
	state={
		val:[
		{id:1,question:"what is your name?",answer:"Lusine"},
		{id:2,question:"how old are you?",answer:31},
		{id:3,question:"how are you?",answer:"fine"},
		{id:4,question:"want are you doing?", answer:"I learn react"}
		],
		constant:0,
		   }
	ShowAnswer= this.ShowAnswer.bind(this);
	ShowAnswer=(arg)=>{
		if(this.state.val[0].question !== arg){
			this.satState.val({
			question:arg
		})
		}this.satState.val({
			question:this.state.val.question
		})
		
	};

	render(){
		const x=this.state.val
		return (
			<div >
	{x.map((elem) =>{
	return(
	<Divs
	 key={elem.id}
	 question={elem.question}
	 answer={elem.answer}
	 chenge={this.ShowAnswer}
	 />);})}

	<AddNumber
	 Const={this.state.constant} 
	 Add4={()=>this.satState({const: this.state.constant+5})}
	 Add15={()=>this.satState({const: this.state.constant+15})}
	 AddX={()=>this.satState({const: this.state.constant+Math.floor(Math.random() * (20 - 1)) + 1})}
	 Const0={()=>this.satState({const: 0})}/>
		</div>
	)
 }
}