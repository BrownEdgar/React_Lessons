import React from 'react';
import s from  './Developers.module.css'


function Developers(props) {
		return (
			<div className={s.box}>
				<h1>Name: {props.name}</h1>
				<h4>Skilss: {props.skilss}</h4>
			</div>
		);
}
export default Developers;