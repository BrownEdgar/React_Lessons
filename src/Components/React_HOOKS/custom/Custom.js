import React, {useState} from 'react';

export const CustomHooks = ({
    curretValue = 0,
    min = -5,
    max = 15,
    step = 3
}) =>{
    const [value, setValue] = useState(curretValue);

const inc = () =>{
    setValue(prevState =>(prevState >= max ? max : prevState + step ))
}
const dec = () =>{
    setValue(prevState => (prevState <= min ? min : prevState  - step ) )
}
const reset = () =>{
    setValue(curretValue)
}
    return [value, {inc, dec, reset}];
}