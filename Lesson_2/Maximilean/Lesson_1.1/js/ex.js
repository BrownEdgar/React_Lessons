// 2.Ստեղծել function կոմպոնենտ, որը ստանում է props - արգումենտ և դնելով <p> թեգի մեջ, ետ է վերադարձնում, արտածել այդ նույն կոմպոնենտը 3 անգամ տարբեր տվյալներով
// function Person(props) {
// 	return (
// 		<div className="person">
// 			<h1>{props.name}</h1>
// 			<p>Your Age: {props.age}</p>
// 		</div>
// 	);
// }

// //մեկ այլ տարբերակ տարբերակ
// const app = (
// 	<div>
// 		<Person name="Remark" age="65" />
// 		<Person name="Joan" age="29" />
// 		<Person name="Tolkin" age="80" />
// 	</div>
// )

// ReactDOM.render(app, document.getElementById('root'));

// 1.Ստեղծել function կոմպոնենտ, որը վերադարձնում է div 5 հատ <li> էլեմենտներով, Նրանց մեջ տեղադրում էք կամայական զանգվածից մեկական տվյալ


const arr = [
	{ id: 1, name: "Narek" },
	{ id: 2, name: "Narek2" },
	{ id: 3, name: "Narek3" },
	{ id: 4, name: "Narek4" },
	{ id: 5, name: "Narek5" }
];

function First() {
	return (
		<ul className="list">
			{arr.map(elem => {
				return (
					<li key={elem.id}>{elem.name}</li>
				)
			})}
		</ul>
	)
}
function App() {
	return (
		<div>
			<First />
		</div>
	)
}
ReactDOM.render(<App />, document.getElementById('root'))