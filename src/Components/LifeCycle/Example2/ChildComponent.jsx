////////////////////////////////////////////////////////////////////////////////
// - կոմպոնենտում դիտարկվում են 
// 1․ button disabled արգումենտը
// 2․ կախված `props.count` արժեքից այն դառնում է պասիվ
// 3․ Արժեքը ստուգվում է նախորոոք 30-րդ տողում, և փոխանցվում է button-ին
// //////////////////////////////////////////////////////////////////////////////

import React, {Component} from 'react'
import Info from './Info/Info'
// styles for console.log
const color = `
	border-bottom:2px solid #f2f2f2; 
	color: white;
	background:tomato;
	border-radius:3px;
	font-family: 'Indie Flower', cursive;
	padding:5px;`;

export default class ChildComponent extends Component {
    render() {
        console.log('%cchild render method', color);
		const copy = this.props.allParams;
		let btn =  Boolean(this.props.count >= 2);
        return (

            <div>
                <h1>{this.props.name}</h1>
                <div className="btnBox">
					<button onClick={this.props.f1} disabled={btn}>Change Props</button>
					<button onClick={this.props.f2} >Delete Component</button>
                </div>
                <Info prop1={copy}/>
            </div>
        )
	}
	// ///////////////////////////////////////////////////////
	getSnapshotBeforeUpdate(prevProps, prevState,snapShot) {
		console.log("%cCHILD getSnapshotBeforeUpdate", color);
		return null;
	}
	// ///////////////////////////////////////////////////////
	componentDidMount() {
		console.log("%cCHILD componentDidMount", color);
	}
	// ///////////////////////////////////////////////////////
	componentWillUnmount() {
		console.log("%cChildComponent delted :(", color);
	}
	// ///////////////////////////////////////////////////////
	componentDidUpdate(prevProps, prevState) {
		console.log("%cChild componentDidUpdate", color);
	}
	// ///////////////////////////////////////////////////////
}


console.log("%cMy name","color:red;background:white");