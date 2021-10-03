function Name (props){
return <h1>{props.data}</h1>
}
const App = () => {

	return (
		<div>
			<Name data="Mariam"/>
			<Name data="Seyran"/>
			<Name data="Artyom"/>
			<Name data="Lyuci"/>
			<Name data="Artyom"/>
			<Name data="Edgar"/>
		</div>
	)
}


ReactDOM.render(<App />, document.getElementById('root'));
