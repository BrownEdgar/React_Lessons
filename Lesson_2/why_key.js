function ListItem(props) {
	// Правильно! Не нужно определять здесь ключ:
	return <li>{props.value}</li>;
}

function NumberList(props) {
	const numbers = props.numbers;
	const listItems = numbers.map((number) =>
		// Правильно! Ключ нужно определять внутри массива:
		<ListItem key={number.toString()}
			value={number} />

	);
	return (
		<ul>
			{listItems}
		</ul>
	);
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
	<NumberList numbers={numbers} />,
	document.getElementById('root')
);