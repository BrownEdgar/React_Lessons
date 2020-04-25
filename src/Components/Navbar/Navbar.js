import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css'
class Nav extends Component {
	render() {
		return (
			<nav className={style.flex}>
				<h1>Logo</h1>
				<ul className="myMenu">
					<NavLink to='/header' activeClassName="curent">
						<li>About</li>
					</NavLink>
					<NavLink to='/developers'>
						<li>Blog</li>
					</NavLink>
				</ul>
			</nav>
		);
	}
}
export default Nav;