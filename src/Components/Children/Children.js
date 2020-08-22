////////////////////////////////////////////////////////////////////////////////
//  props.children --> [{…}, {…}]
//
// - Զանգված է որտեղ պահվում են փոխանցված արգումենտները Օբյեկտի տեսքով
// - Իր մեջ ունի ունի 'length', 'type', 'key' հատկությունները
// - 'props.children'- ում պահվում է արգումենտի տեքստային բաղադրությունը
// - Օրինակ։ 'props.children[1].type' --> կվերադարձնի 2-րդ զավակի տիպը
////////////////////////////////////////////////////////////////////////////////
import React from 'react'

export default function Children(props) {
	//  props.children -->[{…}, {…}]

	// let r = 0;
	// while(r<10){
	// 	console.log('r', r)
	// 	r++;
	// }
	// debugger
	console.log('props.children', props.children)
	return (
		<div>
			{props.children}
		</div>
	)
}
