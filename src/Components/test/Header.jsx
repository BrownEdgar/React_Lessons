import { useContext } from 'react';
import { MyContext } from './App';

function Header() {
  const { title } = useContext(MyContext)
  return <div>
    <h1>{title}</h1>
  </div>;
}

export default Header;
