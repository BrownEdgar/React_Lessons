import React, { Component } from 'react';
import Developers from './Components/Developer/Developers';



class App extends Component {
	state = {
			developers: [
				{ name: "Sebastian", skilss: "Html, css" },
				{ name: "Baghdaser", skilss: "Html, css, js" },
				{ name: "Mix", skilss: "Html, css, js, React.js, Node.js" }
			],
			title: "Our Developers",
			count:0,
			showDiv:false
		}

	changeTitleHandler = (arg) => {
		 //this.state.title = "new Title"
		this.setState({
			title: arg,
		})
	}

	changeCount = () =>{
		this.setState({ count: this.state.count + 1   });
	}
	
	showDivHandler = () =>{
		console.log("showdiv");
		this.setState({ showDiv: !this.state.showDiv  });
	} 

	render(){
		const d = this.state.developers;
		let result = null;

		if (this.state.showDiv) {
			result = d.map((elem, index) => {
				return (
					<Developers
						key={index}
						name={elem.name}
						skilss={elem.skilss}
						changeTitle={this.changeTitleHandler.bind(this, elem.name)} />
				);
		})
	}
		return (
			<div>
				<h1>{this.state.title}</h1>
				{result}
				{/*
				<Developers
				name={d[0].name}
				skilss={d[0].skilss}/>
				 <Developers 
				name={d[0].name} 
				skilss={d[0].skilss}/>
				<Developers 
					name={d[1].name}
					skilss={d[1].skilss} />
				<Developers 
					name={d[2].name}
					skilss={d[2].skilss}
				/> */}
				<button onClick={this.changeTitleHandler.bind(this,"sdadas")}>Change Title</button>
				<button onClick={this.showDivHandler}>Show div</button>

			{/* increment Button */}
				<h2>{this.state.count}</h2>
				<button onClick={this.changeCount}>Increment </button>
				<button onClick={() => this.setState({ count: this.state.count - 1 }) }>Decriment </button>

			</div>
		);
	}
 
}

 export default App;



