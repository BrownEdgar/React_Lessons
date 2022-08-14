/* eslint-disable no-undef */
// {}
function Component({ params, arg }) {
	return <div>
			<h1>Component</h1>
	</div>
}



const App = () => {
	let isShow = false
	const handleClick = (e) => { 
		isShow = !isShow
		console.log(isShow);
	}

	return <div>
		{isShow && <Component />}
		<button onClick={handleClick}>click</button>
	</div>
}


// new api react 18
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);




const arr2 = ['html', 'css', 'Java Script', 'React.js', 'Node.js', 'Python'];

const f = arr2.filter(elem => elem.endsWith(".js"))

// endsWith
// startsWith
// includes
// split
// match
// padEnd
// padStart
// trim 
// some
// every
// find
// findIndex
// sort
// reduce
// filter
// map
// forEach
// lastIndexOf
// replaceAll


























