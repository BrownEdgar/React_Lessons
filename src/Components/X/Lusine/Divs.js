import React from 'react';
import s from './Divs.module.css'

function Divs(props) {
	return(
		<div className={s.box} onClick={props.chenge}>
	 <h3>{props.question}</h3>
	
	 </div>
		);
}

export default Divs;