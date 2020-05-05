import React, { Component } from 'react';
import Users from "./Users";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {  }
	}
	render() { 
		return ( 
			<div>
				<Users/>
			</div>
		 );
	}
}
 
export default App;