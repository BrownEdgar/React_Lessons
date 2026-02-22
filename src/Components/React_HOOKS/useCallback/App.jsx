////////////////////////////////////////////////////////////////////////////////
// useColback հուկը վերադարձնում է ՛մեմոիզացված՛ Colback-function, որը փոխվում է միայն կախվածություններից  մեկի արժեքը փոխելու դեպքում:
//useCallback(fn, deps)  === useMemo(() => fn, deps).- այս 2 գրառումներն նույն բանն են անում
//// link --> https://youtu.be/-Ls48dd-vJE
////////////////////////////////////////////////////////////////////////////////

import { useState, useCallback } from 'react';
import './App.css';
import { Child } from './Child';
export default function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Karlen');

  const clickHandler = useCallback((n) => {
    setCount((count) => count + n);
  }, []);

  const handleChange = () => {
    setName('vardan');
  };
  return (
    <div className='box'>
      <h1>useCallback hook</h1>
      <h3>count: {count}</h3>
      <h3>name: {name}</h3>

      <Child increment={clickHandler} name={name} />
      <button onClick={handleChange}>Change name</button>
    </div>
  );
}
