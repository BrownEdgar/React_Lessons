import React from 'react';

function AddNumber(props){
	return(
		<div>
		<h3>{props.Const}</h3>
		<button onClick={props.Add4}>avelacnel 5 ov</button>
		<button onClick={props.Add15}>avelacnel 15 ov</button>
		<button onClick={props.AddX}>avelacnel X ov</button>
		<button onClick={props.Const0}>0</button>

		</div>
		);

}
export default AddNumber