import React, { Component } from 'react';
import Developers from './Components/Developers'
import './style.css'



class App extends Component {
	state = {
		developers:[
			{ name: "Sebastian", skilss: "Html, css"},
			{ name: "Baghdaser", skilss: "Html, css, js"},
			{ name: "Mix", skilss: "Html, css, js, React.js, Node.js" }
		],
		title:"Our Developers"
	}

	changeTitleHandler = () => {
		console.log("click");
		// this.state.title= "new Title"
		this.setState({
			title: "new Title",
			open:false
		})
	}
	render(){
	
		const d = this.state.developers;
		return (

			<div>
				<h1>{this.state.title}</h1>
				<Developers 
				name={d[0].name} 
				skilss={d[0].skilss}/>
				<Developers 
					name={d[1].name}
					skilss={d[1].skilss} />
				<Developers 
					name={d[2].name}
					skilss={d[2].skilss}
				/>
				<button onClick={this.changeTitleHandler}>Change Title</button>
			</div>
		);
	}
 
}

 export default App;



