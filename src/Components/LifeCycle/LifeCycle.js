import React from "react";
import LifeComponent from "./LifeComponent";
import photo from "../../img/lifeCycle.jpeg";
import s from "./LifeCycle.module.css";

class Life extends React.Component {
    constructor(props){
		// constructor-ը միակ տեղն է, որտեղ կարելի է  անմիջականորեն  հայտարարել/փոփոխել (state)-ը։Մնացած դեպքերում պետք է օգտագործել this.setState-ը.
		//  Не копируйте пропсы в состояние Не делайте этого!
		//this.state = { color: props.color };
        console.log("constructor Run"); 
        super(props);
        this.state = {
            name:"lifeCircle n Rreact.js"
        }
	}
	//հին հայտարարում componentWillMount()-այս մեթոդը հնացել է
	UNSAFE_componentWillMount(){
		// Ռեակտ կոմպոնոենտը հայտնաբերված է բայց դեռ պատրաստ չէ
		// օգտագործվում է շատ հազվադեպ, այստեղ state դեռ չկա!
        console.log("componentWillMount");
	}
	
   componentDidMount(){
		// Աշխատում է երբ որ կոմպոնենտը նկարվում է(randering) DOM-ում
		//this.setState-ը այստեղ չկանչել!
        console.log("componentDidMount");
		this.setState({ name: "UNSAFE_componentDidMount" });
	}

	UNSAFE_componentWillReciveProps(nextProps) {
		console.log('nextProps', nextProps)
	}

    UNSAFE_componentWillUnmount() {
        console.log("componentWillUnmount");
	}
	
    handleClick(){
        this.setState({
            name:"changed name!"
        })
	}
	
    render(){
        //Սարքում է Վիրտուալ DOM-ը
        console.log("render run");
        return(
            <div>
				<LifeComponent name={this.state.name} age="25"/>
               <button onClick={this.handleClick.bind(this)}>Click me</button>
				<p><img
					src={photo}
					alt="LifeCycle Methods view" /></p>
            </div>
        )
    }
}
export default Life;