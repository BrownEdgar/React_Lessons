// 1.Ստեղծել function կոմպոնենտ, որը վերադարձնում է div 5 հատ <li> էլեմենտներով, Նրանց մեջ տեղադրում էք կամայական զանգվածից մեկական տվյալ
// const arr = [
// 	{ id: 1, name: "Narek" },
// 	{ id: 2, name: "Narek2" },
// 	{ id: 3, name: "Narek3" },
// 	{ id: 4, name: "Narek4" },
// 	{ id: 5, }
// ];
// function MyComponent(){

// 	return(
// 		<ul>
// 			{arr.map(elem =>{
				
// 				return (
// 					<li key={elem.id} >{elem.name ? elem.name : "unknown" }</li>
// 				)
// 			})}
// 		</ul>

// 	);
// }
// ReactDOM.render(<MyComponent/>, document.getElementById('root'))



// 2.Ստեղծել function կոմպոնենտ, որը ստանում է props - արգումենտ և դնելով <p> թեգի մեջ, ետ է վերադարձնում, արտածել այդ նույն կոմպոնենտը 3 անգամ տարբեր տվյալներով

// function MyComponent(props) {
// 	return (
// 		<p>{props.name}</p>
// 	);
// }
// function App() {
// 	return (
// 		<div>
// 			<MyComponent name="Jhon1"/>
// 			<MyComponent name="Jhon2"/>
// 			<MyComponent name="Jhon3"/>
// 		</div>
		
// 	);
// }

// const app = (
// 	<div>
// 		<MyComponent name="Jhon1" />
// 		<MyComponent name="Jhon2" />
// 		<MyComponent name="Jhon3" />
// 	</div>
// );
// ReactDOM.render(app, document.getElementById('root'));


function Developers(props) {
	return (
		<div>
			{ props.options.map(elem =>{
				return (
					<div key={elem.id}>
						<p>{elem.name}</p>
						<p>{elem.skills}</p>
					</div>
				)
			})} 

		</div>

	)
}

 
function App() {
	const arr = [
		{ id: 1235, name: "Tigran", skills: "Html5, css3, javaScript" },
		{ id: 2668, name: "Henry", skills: "Html5, css3, javaScript React.js" },
		{ id: 3025, name: "Armen", skills: "Html5, css3, javaScript" },
		{ id: 4005, name: "Sona", skills: "Html5, css3, javaScript" },

	];
	return (
		<div>
			<Developers options={arr}/>
		</div>
	)
}
ReactDOM.render(<App/>, document.getElementById('root'));
	