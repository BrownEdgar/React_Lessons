import React, { Component } from 'react'

export default class Clock extends Component {
	state = {
		date: new Date(), 
		stop:false
	}

	tick() {
		this.setState({
			date: new Date()
		});
	}
	componentDidMount() {
		this.timer = setInterval(() => {
			this.tick()
		}, 1000);
	}
	shouldComponentUpdate(nextProps, nextState) {
		console.log('shouldComponentUpdate');
		if (nextState.stop) {
			//Եթե այս տողը բաց թողնենք նույնիսկ ժամի կանգնելուց հետօ մեթոդը կկանչվի 
			clearInterval(this.timer)
			return false
		}
		return true
	}
	componentWillUnmount() {
		clearInterval(this.timer)
	}
	kang = () =>{
		this.setState({ stop:!this.state.stop  });
	}
	render() {
		return (
			<div>
				<h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>
				<button onClick={() => this.kang()}>Kang</button>
			</div>
		)
	}
}
