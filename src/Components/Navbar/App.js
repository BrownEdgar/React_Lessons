import React, { Component } from 'react'
import Navbar from './Navbar'
import { BrowserRouter as Router,Route} from 'react-router-dom'
import Header from './Header/Header'
import Developers from '../Developer/Developers';


export class App extends Component {
	render() {
		return (
			<Router>
			<div>
				<Navbar/>
					<Route path='/header' component={Header}/>
					<Route path='/developers' component={Developers}/>
			</div>
			</Router>
		)
	}
}

export default App
