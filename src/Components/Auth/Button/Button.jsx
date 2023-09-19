import React from 'react'
import "./Button.css";

export default function Button(props) {
    return (

        <button
            className={`btn btn-${props.type}`}
            onClick={props.onClick}
            disabled={props.disabled}>
            {props.children}
        </button>
    )
}
// v54