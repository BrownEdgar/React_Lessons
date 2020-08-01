///////////////////////////////////////////////////////////////////////////////
// 1. Function Component example
// 2. class to className
// 3. ReactDOM.render() methods
// 4. Function {props} property
// 5.Babel компилирует JSX в вызовы React.createElement().
// import React from "react";
// import Footer from "../Component/Footer"

// function App (){
// 	return (
// 		<div>
// 		<Footer />
		
// 		<Content x/>
// 		<Content y/>
// 		<Content z/>
	
// 		<Content2 />
// 		<Header />
// 	</div>
// 	);
// }



// ReactDOM.render(<App />, document.querySelector('#root'));

function Person(props) {
	
	// console.log("Working with react");
	return (
		<div className="person">
			<h1>{props.name}</h1>
			<p>Your {props.age}</p>
		</div>
	);
}

ReactDOM.render(<Person name='Max' age="35" />, document.querySelector('#root'));
// props ={
// 	name='Max',
// 	age="35" 
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function Welcome(props) {
//       return <h1>Hello, {props.name}</h1>;
//     }

//     const element = <Welcome name="Sara" />;
//     ReactDOM.render(
//       element,
//       document.getElementById('root')
// 	);
// Ինչ կատարվեց այս Օրինակում:
// 1. Մենք կանչում ենք ReactDOM.render() < Welcome name = "Sara" /> Էլեմենտով.
// 2. React-ը կանչում է Welcome Կոմպոնենտը  { name: 'Sara' } օբյեկտով props-ի համար.
// 3. Մեր Welcome Կոմպոնենտը Վերադարձնում է <h1>Hello, Sara</h1> արդյունքը.
// 4. React DOM թարմացնում է DOM-ը, համապատասխանեցնելով <h1>Hello, Sara</h1>-ին

///////////////////////////////////////////////////////////////////////////////////////////////////////////


// function Person(props) {
// 	return (
// 		<div className="person">
// 			<h1>{props.name}</h1>
// 			<p>Your Age: {props.age}</p>
// 		</div>
// 	);
// }


//Նույն Կոմպոնենտը կարող ենք նկարել մի քանի անգամ
// const app = (
// 	<div>
// 		<Person name="Remark" age="65" />
// 		<Person name="Joan" age="29" />
// 	</div>
// );

// ReactDOM.render(app, document.querySelector('#root'));


// function Person(props) {
// 	return (
// 		<div className="person">
// 			<h1>{props.name}</h1>
// 			<p>Your Age: {props.age}</p>
// 		</div>
// 	);
// }

// function App() {
// 	return (
// 		<div>
// 			<Person name="Remark" age="65" />
// 			<Person name="Joan" age="29" />
// 			<Person name="Tolkin" age="80" />
// 		</div>
// 	);
// };
// ReactDOM.render(<App/>,  document.getElementById('root'));