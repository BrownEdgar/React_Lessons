import React, { Component } from 'react';
import axios from "axios";

class Users extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users:[],
			axbyur:''
		}
	}
	componentDidMount() {
		// axios.get('/', {
		// 	firstName: 'Fred',
		// 	lastName: 'Flintstone'
		//   })
		//   .then(function (response) {
		// 	console.log("response: ", response);
		//   })
		//   .catch(function (error) {
		// 	console.log(error);
		//   });
		// axios.get('https://jsonplaceholder.typicode.com/users')
		// 	.then(response => {
		// 		console.log(response);
		// 		this.setState({
		// 			users:response.data,
		// 			axbyur:response.config.url
		// 		});
		// 	})
		// 	.catch(err => console.log(err));
		axios({
			  method: 'get',
			  url: 'https://jsonplaceholder.typicode.com/users'
			})
			  .then(res => {
				this.setState({
					 			users:res.data,
					 			axbyur:res.config.url
					 		});
				console.log("res.data:",res.data);
				console.log('res.headers:',res.headers);
				console.log("res.config:",res.config);
			  })
			  .catch(err => console.error("sxal harcum"));
	}
	render() {
		const divStyle = {
			listStyle:"none",
			textAlign: "center",
			color:"green",
			lineHeight: "35px",
			fontWeight:"500",
			fontSize: "24px"
		  };
		return (
			<div style={divStyle}>
				<h3 style={{textAlign: "center"}}>Линк - {this.state.axbyur}</h3>
					<ul style={divStyle}>
						{this.state.users.map((item, index)=>{
							return <li key={index}>{item.title}</li>
						})}
					</ul>
			</div>
		);
	}
}

export default Users;