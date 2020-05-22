
////////////////////////////////////////////////////////////////////////////////
// Refs - ը ստեղծվում է React.createRef() - ի միջոցով և Կոմպոնեննտի տարրերին կցվում են ՛ref՛ ատրիբուտի միջոցով: Սովորաբար, Ref-ը հայտարարում են ՛constructor՛ մեջ, որպեսզի դրանց կարողանան հղվեն Կոմպոնենտի ցանկացած մասից(տող 12):
// React- ը Կոմպոնենտը մոնտաժելիս DOM- ի Էլեմետըը կտա current հատկությությանը և ապամոնտաժելիս(unMount)այն կսարքի null: Ref-ի արժեքը թարմացվում է նախքան componentDidMount- ը և componentըDidUpdate մեթոդները կանչելը:
// useRef похож на «коробку», которая может содержать изменяемое значение в своём свойстве .current.
////////////////////////////////////////////////////////////////////////////////

import React from 'react';
class MyComponent extends React.Component {
	constructor(props) {
		super(props);

		this.inputRef = React.createRef();
		
	}
//Կոմպոնենտի 'Mount'-ից հետո ՛input՛-ը կստանա ֆոկուս
	componentDidMount() {
		this.inputRef.current.focus();
	}
	render() {
		// Երբ ref-ը  render-ում փոխանցվում է Էլեմետի
		// այդ էլեմենտի  հղումը հասանելի է ref.current-ում
		return <input 
		type="text"
		ref={this.inputRef} 
		/>;
	}


}
export default MyComponent;