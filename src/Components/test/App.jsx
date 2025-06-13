
// Prop drilling

import { useState, createContext } from 'react';


export const MyContext = createContext(null)

function App() {
  const [value, setvalue] = useState('aaaa');

  const handleChange = (e) => {
    setvalue(e.target.value)
  }
  return <div>
    <h1>value: {value}</h1>
    <form>
      <input type="text" value={value} />
    </form>
  </div>;
}

export default App;
