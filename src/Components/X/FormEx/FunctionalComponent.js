import React, {useState, useEffect,useRef} from 'react'

export default function FunctionalComponent() {
    const [state, setstate] = useState(0)
    useEffect(()=>{
      
        return ()=>{

        }
    })
    const changeHandler = (number) =>{
        setstate(number)
    }
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={()=> changeHandler(1)}>Count up 1</button>
            <button onClick={()=> changeHandler(2)}>Count up 2</button>
            <button onClick={()=> changeHandler(3)}>Count up 3</button>
        </div>
    )
}
