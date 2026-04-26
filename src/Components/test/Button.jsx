import { createContext, useContext, useState } from 'react';

const ButtonContext = createContext();

export function Button({ children }) {
  const [index, setIndex] = useState(0);

  return (
    <ButtonContext.Provider value={{ index, setIndex }}>
      {children}
    </ButtonContext.Provider>
  );
}

function Btn({ children, id }) {
  const { index, setIndex } = useContext(ButtonContext);

  return (
    <button onClick={() => setIndex(id)} className={`btn ${index === id ? "active" : ""}`}>
      {children} - {id}
    </button>
  )
}

Button.Btn = Btn;