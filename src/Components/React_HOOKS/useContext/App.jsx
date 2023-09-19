////////////////////////////////////////////////////////////////////////////////
//  About React Hooks: useContext
//  Նախատեսված է ֆունկցիոնալ կոմպոնենտում "Context" ավելացնելու համար
// 	առանց <Consumer>
//  
////////////////////////////////////////////////////////////////////////////////
import React, { useContext } from 'react'
import { MyContext, AnotherContext, Zangvac } from './Context'

export default function App() {
  const context = useContext(MyContext);
  const context2 = useContext(AnotherContext);
  const z = useContext(Zangvac)

  return (
    <div className={context2}>
      <h1>{context}</h1>
      <p>{z.reduce((a, b) => a + b)}</p>
    </div>
  )
}
