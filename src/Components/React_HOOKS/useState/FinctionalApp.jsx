////////////////////////////////////////////////////////////////////////////////
//  About React Hooks:
// Հուկերը ցիկլերի և if-րի մեջ օգտագործել չի կարելի
// Գոյություն ունեն Հիմնական և հավելյալ հուկեր
// X this.state
// X this.setState()
// X handleChangeName.bind(this)
// Կարող ենք մեկ ֆունկցիայում ունենալ մի քանի "state"
// ՄԵզ արդեն անհրաժեշտ չի լինի ստեղծել կողմնակի փոփոխականներ, նրանց մեջ "state"-ից արժեքներ պահելու համար
// Ֆունկցիաների անունները պետք է լինեն մեծատառ
////////////////////////////////////////////////////////////////////////////////
import { useState } from 'react';
import '../index.css';

export default function FinctionalApp() {
  // const myState = useState(0);
  // let count = myState[0];
  // let setCount = myState[1];
  const [count, setCount] = useState(0);
  const [obj, setObj] = useState({
    name: 'React',
  });

  const inctementHandler = () => {
    setCount(count + 1);
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div className='main'>
      <h1>With Hooks!</h1>
      <h2>useState()</h2>
      <button onClick={inctementHandler}>Increment Me {count}</button>
      <p>{obj.name}</p>
    </div>
  );
}
