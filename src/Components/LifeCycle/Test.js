import React, { Component } from 'react'
import LifeComponent from './LifeComponent';

export default class Test extends Component {
    constructor(props){
        super(props);
        console.log("------------------------");
        console.log("constructor run");
        this.state={
            count:0,
            mah: false
        }
    }
    // UNSAFE_componentWillMount(){
    //    console.log('UNSAFE_componentWillMount'); 
    // }
    //this
   static getDerivedStateFromProps(props, state){
    console.log("------------------------");
       console.log('getDerivedStateFromProps');
   if(state.count < 10){
       return {count: props.name}
   }else{
    return null;
   }
}
componentDidMount(){
    console.log("------------------------");
    console.log("componentDidMount");
}

change = ()=>{
    this.setState({ mah: !this.state.mah  });
}
    render() {
        console.log("------------------------");
        console.log("render run");
        return (
            <div>
                <h1>Life Cycle</h1>
                <h1>{this.state.count}</h1>
                <button onClick={this.change}>Update</button>
               {
                   this.state.mah ? null
                   :  <LifeComponent name={this.state.count}/>
               } 
               <button onClick={this.change}>Update</button>
            </div>
        )
    }
}

