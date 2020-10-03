import React from 'react'
// type | name | label | onChange | error | cl
export default function Input(props) {
    const type = props.type || "text";
    const name = props.name || "name";
    const htmlFor = `${type}-${Math.random().toFixed(4)}`
    return (
        <div className={`inputBox-${props.cl}`}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input 
            type={type} 
            name={name}
            onChange={props.onChange}/>
           {props.error &&  <p>INvalid {props.label}</p>}
        </div>
    )
}

