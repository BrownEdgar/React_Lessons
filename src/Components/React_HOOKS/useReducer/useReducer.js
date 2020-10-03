export default function reducer(state, action) {
	switch (action.type) {
		case 'increment':
			return { count: state.count + 1 };
		case 'decrement':
			return { count: state.count - 1 };
		case 'add':
			return { count: state.count + action.number };
		default:
			throw new Error();
	}
}