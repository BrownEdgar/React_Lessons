import { useContext } from 'react';
import { MyContext } from './Context';
export default function App() {
  const x = useContext(MyContext);
  return (
    <div>
      <p>{x}</p>
    </div>
  );
}
