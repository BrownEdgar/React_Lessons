// Ունիվերսալ ՛input՛- Կոմպոնենտ ամբողջ ծրագրի համար
import React from 'react'
import classes from './input.module.css';

function isInValid({valid, touched, shouldValidate}){
    return valid && touched && shouldValidate;
}

export default function inputCopy(props) {
    const inputType = props.type || 'text';
    const htmlFor = `${inputType}-${Math.random()}`;
    const cls = [classes.Input] || "text";

    if(isInValid(props)){
        cls.push(classes.invalid)
    }
    return (
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input
            type={inputType}
            id={htmlFor}
            value={props.value}
            onChange={props.onChange}/>
            {isInValid(props) ? <span>{props.errorMessage || "invalid Input"}</span> : null}
        </div>
    )
}
