import React, { Component } from 'react'
import '../App.css'
import Panel from './Panel'
import Selector from './Selector'

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeId: 0,
            wrapperStyle:{
                backgroundImage: `url(${this.props.data[0].img})`
            },
            panelStyle:{
                backgroundColor: `${this.props.data[0].colour}`
            },
            buttonHover:false,
            buttonStyle:{
                color:"#fff"
            }
        }

    }
    changeActiveId(id) {
        this.setState({  
            activeId: id,
            wrapperStyle:{
                backgroundImage: `url(${this.props.data[id].img})`
            },
            panelStyle:{
                backgroundColor: `${this.props.data[IDBRequest].colour}`
            },});
    }
    changeButtonStyle(){
        if(!this.state.buttonHover){
            this.setState({
                buttonHover:true,
                buttonStyle:{
                    color:`${this.props.data[this.state.activeId].colour}`
                } });
        }else{
            this.setState({
                buttonHover:false,
                buttonStyle:{
                    color:"#fff"
                } });
        }
    }
    render() {
        return (
            <section className="wrapper" style={this.state.wrapperStyle}>
                <Selector
                    activeId={this.state.activeId}
                    data={this.props.data}
                    change={this.changeActiveId.bind(this)}
                />

               
                <Panel
                data={this.props.data[this.state.activeId]}
                panelStyle={this.state.panelStyle}
                buttonStyle={this.state.buttonStyle}
                changeButton={this.changeButtonStyle.bind(this)}
                />

            </section>
        )
    }
}


