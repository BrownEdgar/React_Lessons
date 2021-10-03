
const Element = (props) => {
	console.log(props);
	return <div>
		{props.data.map((elem,index) => <div key={index}>
		<h1>{elem}</h1>
		<p>Lorem ipsum dolor sit amet.</p>
			<Genarator url="groxicocy.com" />
		</div>)}
	</div>
}
function Genarator(props) {
	return <a href={props.url}>DEpi urax apaga</a>
}
function App() {
	const arr = ["a", "b", "c", "d"]
	return <div>
		<Element data={arr}/>
		
	</div>
}




ReactDOM.render(<App/>, document.getElementById("root"))