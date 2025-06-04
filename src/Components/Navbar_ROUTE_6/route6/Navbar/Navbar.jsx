import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <header>
      <nav className='flex'>
        <ul>
          <li>
            <NavLink to='/' className={(isActive) => isActive && 'active-link'}>
              Home
            </NavLink>
          </li>
          {/* <li>
              <NavLink to="/friends" className={(isActive) => isActive && "active-link"}>friends</NavLink>
            </li> */}
          <li>
            <NavLink
              to='/posts'
              className={(isActive) => isActive && 'active-link'}
            >
              Posts
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/todos'
              className={(isActive) => isActive && 'active-link'}
            >
              useLoaderData
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
