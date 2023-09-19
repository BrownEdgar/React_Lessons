import React, { Component} from 'react';
import ErrorCycle from "./ErrorCycle";
import Forma from "./Form";
import Bomb from "./Bomb";
class App extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			
		 }
	}
	render() { 
		return (
			<>
			<ErrorCycle>
				<Forma/>
				<Bomb/>
			</ErrorCycle>
			</>
		  );
	}
}
 
export default App;