// /////////////////////////////////////////////////////////////////////////////
//	Component LifeCycle: 	կարդալ ավելին 	
//	--> https://habr.com/ru/post/358090/
// 	-->https://ru.reactjs.org/docs/react-component.html#constructor
// 	-->https://www.youtube.com/watch?v=auAtFC5nfTs&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=55
// 
// 
// - componentWillUnmount()- ը ներկաըացված է ՛./Components/Developer/Developers՛ ֆայլում
// - React 17,0-ից : Կջնջվեն componentWillMount, componentWillReceiveProps և
// componentWillUpdate. (Կաշխատեն միայն կըանքի փուլկերի նոր անուները  «UNSAFE_».)
// - UNSAFE_-ը նպատակ ունի բոլոր React ծրագրավորողներին դրդել,որպեսզի նրանք սկսեն
// չոգտագործել այդ մեթոդների իրեն կոդում.
// Երբ ոչ ապահով, հնացած մեթոդները հայտարարվում են նոր փոխարինող մեթոդների հետ միասին,
// getSnapshotBeforeUpdate() & getDerivedStateFromProps()
// <React.StrictMode> - ռեժիմում կհարուցի ՛Warningn՛-եր և 'Error'-եր
// 
// //////////////////////////////////////////////////////////////////////////////

import React from "react";
// import LifeComponent from "./LifeComponent";
import photo from "../../img/lifeCycle.jpeg";
import "./LifeCycle.module.css";

class Life extends React.Component {
    constructor(props) {
        // constructor-ը միակ տեղն է, որտեղ կարելի է  անմիջականորեն  հայտարարել/փոփոխել
        // (state)-ը։Մնացած դեպքերում պետք է օգտագործել this.setState-ը.
		// X this.state = { color: props.color };
		console.log("constructor Run");
		console.log(`------------------------`);
        super(props);
        this.state = {
            name: "lifeCircle n Rreact.js"
        }
    }
    //հին հայտարարում componentWillMount()-այս մեթոդը հնացել է
    // UNSAFE_componentWillMount() {
    //     // Ռեակտ կոմպոնոենտը հայտնաբերված է բայց դեռ պատրաստ չէ օգտագործվում է շատ
    //     // հազվադեպ, այստեղ state դեռ չկա!
	//     console.log("componentWillMount");
	//		console.log(`------------------------`);
    // }
   
	// static getDerivedStateFromProps(nextProps, prevState) {
	// 	console.log('getDerivedStateFromProps', prevState);
	// 	console.log(`------------------------`);
	// 	//այս տողը միանգամից կփոխի հատկության արժեքը, 
	// 	//քանի որ կանչվում է render()-ից առաջ
	// 	return { name:"Method change this name before 'rendering'"};// X this.state.name չենք գրում
    // }
    componentDidMount() {
        // Աշխատում է երբ որ կոմպոնենտը նկարվում է(randering) DOM-ում this.setState-ը
		// այստեղ չկանչել!
		console.log("componentDidMount");
		console.log(`------------------------`);
        //this.setState({ name: "UNSAFE_componentDidMount" });
    }
// Աշխատում է երբ որ կոմպոնենտը ստանում է նոր 'props'-ներ։
// Համարվում է հնացած մեթոդ
// 	UNSAFE_componentWillReciveProps(nextProps, prevContext) {
//			console.log('nextProps', nextProps);
//			console.log(`------------------------`);
//     }


	//հանել getDerivedStateFromProps-ը նոր աշխատացնել
	shouldComponentUpdate(nextProps, nextState) {
		if (nextState.name === "changed name!") {
			console.log('-------------NEW START-------------')
			console.log('DON\'t  rendering!');
			return false;
		}
		console.log('-------------NEW START-------------')
		console.log('Component must by rendering');
		return true;
	}
	UNSAFE_componentWillUpdate(nextProps, nextState){
		console.log('UNSAFE_componentWillUpdate');
		console.log(`------------------------`);
	}
//     UNSAFE_componentWillUnmount() {
//		console.log("componentWillUnmount");
//		console.log(`------------------------`);
//     }

    handleClick() {
        this.setState({name: "changed name!"})
	}
	// Կանչվում է Կոմպոնենտի թարմացումից անմիջապես հետո։ 
	componentDidUpdate(prevProps, prevState, prevContext) {
		console.log('Cpmponent updating');
		console.log(`------------------------`);
		console.log('prevProps', prevProps, '\nprevState', prevState,  'prevContext', prevContext)
}
    render() {
        //Սարքում է Վիրտուալ DOM-ը
		console.log("render run");
		console.log(`------------------------`);
        return (
            <div>
                <h1>{this.state.name}</h1>
                {/* <LifeComponent name={this.state.name} age="25"/> */}
                <button
                    onClick={this
                    .handleClick
                    .bind(this)}>Click me</button>
                <p><img src={photo} alt="LifeCycle Methods view"/></p>
            </div>
        )
    }
}
export default Life;