import React from 'react'
import {CustomHooks} from './Custom'

export default function App() {
    const [value, {inc, dec, reset}] = CustomHooks({
    curretValue: 0,
    min: -5,
    max: 15,
    step: 4
    })
    return (
        <div>
            <button onClick={dec}>-</button>
            {value}
            <button onClick={inc}>+</button>
            <button onClick={reset}>x</button>
        </div>
    )
}
