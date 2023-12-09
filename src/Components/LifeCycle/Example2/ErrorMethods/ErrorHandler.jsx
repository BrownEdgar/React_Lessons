// /////////////////////////////////////////////////////////////////////////////
// - Այս օրինակով ցույց է տրված ՛Error՛-րի հետ աշախատանքը React-ում
// - ՝LifeCycle՝ մեորդների․՝ getDerivedStateFromError  componentDidCatch միջոցով
//  
// /////////////////////////////////////////////////////////////////////////////

import React from 'react';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			error: false 
		};
	}
	//այս մեթոդի աշխատանքի ժամանակ դեռ 'state' չկա՝ դրա համար ուղակի { error: true }
	static getDerivedStateFromError(e) {
		console.log('getDerivedStateFromError')
		// Տեղի է ունեցել ՍԽԱԼ!!!
		return { error: true };
	 }
	

	componentDidCatch(error, info) {
		console.log('componentDidCatch');
		console.log('info', info.componentStack)
		console.log(info);
		this.setState({
			error: true,	
		})
	}
	render() {
		if (this.state.error) { 
			return <h1 style={{ color: 'red' }}>Someting is wrong :(</h1>; // Այլընտրանքային UI
		}
		// սխալ չկա ուրեմն՝․․․
		return this.props.children; 
	}
}
export default App;