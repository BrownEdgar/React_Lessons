// Այս Կոմպոնենտում նկարված 2 input-ների վրա դրված է ստուգում
// եթե "value > 10"-ից ստուգումը դրական պատասղան է տալիս
// գեներացվում է Error,որը մշակվում է ErrorCycle.js-ում  
// ErrorCycle միջանկյալ ներդրված  է App.js և հետեվում է իր "children" կոմպոնենտներին

import React, { Component } from 'react';

class App extends Component {
    constructor(props){
        super(props);
        this.state ={
            name: "Karen",
            password:'',
            result:false,
            count: 0
        }
        this.handleChange.bind(this);
        this.handleSubmit.bind(this);
        this.checkPassword.bind(this);
        
    }

	checkPassword = () => {
		let r = this.state.password;
		let newResult = r.split('');
		let y = newResult.some((a) => {
			return Math.abs(a) ;
        })
		console.log(y);
		return y;
		
	}
    handleChange = event => {
		this.setState({ 
			[event.target.name]: event.target.value
		 })
    }
    
    handleSubmit=(e)=>{
        e.preventDefault();  
    }
        
    render(){
		console.log("this.checkPassword:", this.checkPassword());
		
        if (this.state.name.length > 10 || this.state.name === "" ){
            throw new Error("sxal anun");
		} else if (this.state.password.length > 10 && !(this.checkPassword())){
            throw new Error("sxal password");
        }
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input 
                        type="text" 
                        value={this.state.name}
                        name="name"
                        onChange={this.handleChange}/>
                    </div> 
                    <div>
                        <input 
                        type="password" 
                        value={this.state.password}
                        name="password"
                        onChange={this.handleChange}/>
                    </div>
                    <div>
                        <input 
                        type="submit" 
                        value="submit"
                        name="submit"
                        onClick={this.checkPassword}/>
                    </div>
                </form>
            </div>
        )
    }
}
export default App;