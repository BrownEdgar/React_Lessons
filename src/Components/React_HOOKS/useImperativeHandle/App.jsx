// useImperativeHandle — позволяет дочернему компоненту открыть родителю
// только выбранные методы через ref, скрывая внутреннюю реализацию.

import { useRef, useImperativeHandle, useState } from 'react';
import './App.css';

function FancyInput({ ref }) {
  const inputRef = useRef(null);
  const [value, setValue] = useState('');

  useImperativeHandle(ref, () => ({
    focus() {
      inputRef.current.focus();
    },
    clear() {
      setValue('');
      inputRef.current.focus();
    },
    getValue() {
      return value;
    },
  }));

  return (
    <input
      ref={inputRef}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Введите текст..."
      className="fancy-input"
    />
  );
}

export default function App() {
  const inputRef = useRef(null);
  const [log, setLog] = useState([]);

  const handleFocus = () => inputRef.current.focus();

  const handleClear = () => {
    inputRef.current.clear();
  };

  const handleRead = () => {
    const val = inputRef.current.getValue();
    setLog((prev) => [...prev, `"${val}"`]);
    handleClear()
  };

  return (
    <div className="box">
      <h1>useImperativeHandle</h1>
      <p className="desc">
        Родитель управляет дочерним компонентом через <code>ref</code>, но видит
        только три метода: <code>focus</code>, <code>clear</code>,{' '}
        <code>getValue</code>.
      </p>
      <FancyInput ref={inputRef} />
      <div className="btn-row">
        <button onClick={handleFocus}>Фокус</button>
        <button onClick={handleRead}>Читать</button>
        <button onClick={handleClear}>Очистить</button>
      </div>
      <ul className="log">
        {log.map((entry, i) => (
          <li key={i}>{entry}</li>
        ))}
      </ul>
    </div>
  );
}
