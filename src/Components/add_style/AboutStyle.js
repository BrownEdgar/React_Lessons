import React, { Component } from 'react'
//Տարբերակ 3 առանց from-ի!
import './style.css'

 class AboutStyle extends Component {
	 
	 render() {
	
		//Տարբերակ 2
		// const  myStyles = {
		// 	color: "red",
		// 	fontSize: '36px', // նախընտրելի չէ - 'font-size': '36px',
		// }

		 //Տարբերակ 4 առանց from-ի!
		//   const styles = {};
		//  styles.tab = {
		// 	 display: "inline-block",
		// 	 padding: 10,
		// 	 margin: 10,
		// 	 borderBottom: "4px solid",
		// 	 borderBottomColor: "#ccc",
		// 	 cursor: "pointer"
		//  };

		//  styles.activeTab = {
		// 	 ...styles.tab,
		// 	 borderBottomColor: "#000"
		//  };
		return (
			//Տարբերակ 1 inline
			<div style={{color: "red"}}>
				Add css in my Code
			</div>
			//Տարբերակ 2
			// <div style={myStyles}>
			// 	Add css in my Code
			// </div>
			//Տարբերակ 3
			// <div className="box">
			// 	Add css in my Code
			// </div>
		)
	}
}


export default AboutStyle
