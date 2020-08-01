///////////////////////////////////////////////////////////////
//	PureComponent-ը ժաղանգվում է հենց իրեն անունը կրող օբյեկտից այլ ոչ թե "Component"-ից
// ՊԵտք է օգտագործել զգուշորեն, որովհետև այն կարող է կանգնեցնել ներդրված Կոմպոնենտների ՛render՛-ը։
///////////////////////////////////////////////////////////////


import React, { PureComponent } from 'react'
import Pure from './Pure'
export default class App extends PureComponent {
	state ={
		count:1
	}
	componentDidMount() {
		setInterval(() => {
			this.setState(() => {
				//կաշխատի ամեն վրկ․ մեկ
				//Component-ը PureComponent-ով կաշխատի մեկ անգամ միայն
				return { count: 1 }; 
			});
		}, 1000)	
	}
	render() {
		console.log('render App')
		return (
			<div>
				<Pure count={this.state.count} />
			</div>
		)
	}
}