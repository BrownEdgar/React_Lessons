import React, { useState } from 'react'
// X  this
// X  componen....
// X  this.setState
// X  bind()
export default function Hook() {

    const [data, setData] = useState({
        count:0,
        name:"react.js"
    })
    
    const inctementHandler = () =>{
        setData({
            count:data.count+1,
            name:"react.js"
        })  
        
    }
   
    return (
        <div>
            <button onClick={inctementHandler}>
                Increment Me {data.count} 
			</button>
        <p>{data.name}</p>
          
        </div>
    )
}
