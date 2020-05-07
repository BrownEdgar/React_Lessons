import React from 'react'
import "./Button.css";

export default function Button(props) {
	return <button className={`btn btn-${props.type}`}>{props.children}</button>
}
