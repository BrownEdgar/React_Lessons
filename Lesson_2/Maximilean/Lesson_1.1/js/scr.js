// 1.Ստեղծել function կոմպոնենտ, որը վերադարձնում է div 5 հատ <li> էլեմենտներով, Նրանց մեջ տեղադրում էք կամայական զանգվածից մեկական տվյալ
const arr = [
	{ id: 1, name: "Narek" },
	{ id: 2, name: "Narek2" },
	{ id: 3, name: "Narek3" },
	{ id: 4, name: "Narek4" },
	{ id: 5, name: "Narek5" }
];
// function MyComponent(){
// 	return(
// 		<ul>
// 			{arr.map(elem =>{
// 				return (
// 					<li key={elem.id} >{elem.name}</li>
// 				)
// 			})}
// 		</ul>
// 	);
// }
// ReactDOM.render(<MyComponent/>, document.getElementById('root'))



// 2.Ստեղծել function կոմպոնենտ, որը ստանում է props - արգումենտ և դնելով <p> թեգի մեջ, ետ է վերադարձնում, արտածել այդ նույն կոմպոնենտը 3 անգամ տարբեր տվյալներով

function MyComponent(props) {
	return (
		<p>{props.name}</p>
	);
}
function App() {
	return (
		<div>
			<MyComponent name="Jhon1"/>
			<MyComponent name="Jhon2"/>
			<MyComponent name="Jhon3"/>
		</div>
		
	);
}

const app = (
	<div>
		<MyComponent name="Jhon1" />
		<MyComponent name="Jhon2" />
		<MyComponent name="Jhon3" />
	</div>
);
ReactDOM.render(app, document.getElementById('root'))