import React, { useReducer }from 'react';
import reduser from './useReducer'
const initialState = {count: 0};



function Counter() {
	const [state, dispatch] = useReducer(reduser, initialState);
  return (
    <>

      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}
export default Counter;