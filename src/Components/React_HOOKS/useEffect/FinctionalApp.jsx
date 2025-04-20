////////////////////////////////////////////////////////////////////////////////
//  About React Hooks: useEffect
//  X componentDidUpdate()
// useEffect()-կաշխատի և կկանչի իր մեջի ֆունկցիան ամեն մի props, state փոփոխության, render-ից հետո
// []-  Կաշխատի միայն մեկ անգամ
////////////////////////////////////////////////////////////////////////////////
import { useState, useEffect } from 'react';
import '../index.css';
export default function FinctionalApp() {
  const [mousePosition, SetmousePosition] = useState({ x: null, y: null });
  //----------------------- add -----------------------
  useEffect(() => {
    window.addEventListener('mousemove', getMouseposition);
    return () => {
      window.removeEventListener('mousemove', getMouseposition);
    };
  }, [mousePosition]);

  const getMouseposition = (event) => {
    SetmousePosition({ x: event.pageX, y: event.pageY });
  };
  return (
    <div className='main'>
      <h1>With Hooks!</h1>
      <h2>useEffect()</h2>
      {/* <button onClick={inctementHandler}>Increment Me {count}</button> */}
      <hr />
      <h2>JSON: {JSON.stringify(mousePosition)}</h2>
      {/* կամ */}
      <h2>x position : {mousePosition.x}</h2>
      <h2>y position : {mousePosition.y}</h2>
    </div>
  );
}
