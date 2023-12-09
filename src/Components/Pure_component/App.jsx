///////////////////////////////////////////////////////////////
//	PureComponent-ը ժաղանգվում է հենց իրեն անունը կրող օբյեկտից այլ ոչ թե "Component"-ից(Կարելի է ժառանգվել Component-ից և տեսնել տարբերությունը)
// ՊԵտք է օգտագործել զգուշորեն, որովհետև այն կարող է կանգնեցնել ներդրված Կոմպոնենտների ՛render՛-ը։
// PureComponent-ը փոփոխում է shouldComponentUpdate lifecycle - մեթոդը , ավտոմատ ստուգելով, պետք է արդյոք նորից "նկարել" կոմպոնենտը. PureComponent-ը կկանչւ  "render"մեթոդը միայն եթե հայտնաբերի  state կամ propsճում փոփոխություն
///////////////////////////////////////////////////////////////


import React, { PureComponent, Component } from 'react'
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