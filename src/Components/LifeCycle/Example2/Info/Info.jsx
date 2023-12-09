import React from 'react'
import s from "./Info.module.css"

export default function Info(props) {
	
    const copy = Object.values(props.prop1[0]);
    const data = copy.map(function (elem, index) {
        return (
            <li key={index}>{elem}</li>
        )
    });

    return (
        <div className={s.main}>
            <ul className={s.box}>
                {data}
            </ul>
        </div>
    )
}
