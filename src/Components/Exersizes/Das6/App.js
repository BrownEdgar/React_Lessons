import React, { Component } from 'react';

class App extends Component {
	state = {
		developers: [
			{ name: "Sebastian", skilss: "Html, css" },
			{ name: "Baghdaser", skilss: "Html, css, js" },
			{ name: "Mix", skilss: "Html, css, js, React.js, Node.js" }
		],
		isShow: true
	}
	render() {
		return (
			<div>
				{this.state.isShow && (
				<h1>Ok</h1>
				)}
				<button onClick={() => { this.setState({ isShow : !this.state.isShow })}}>click my </button>
			</div>
		)
	}
}
export default App;
