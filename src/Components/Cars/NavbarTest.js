import React from 'react'
import { NavLink } from 'react-router-dom'
import s from "./Navbar.module.css"
export default function NavbarTest() {
	return (
		<div className={s.header}>
			<ul className={s.list}>
				<li>
					<NavLink to={{
						pathname:"/",
						search:'?name="karen'
					}} activeClassName={s.active} exact>
							Home Page
					</NavLink>
				</li>
				<li>
					<NavLink to={{
						pathname:"/cars",
						search:"?id=1",
						hash:
					}} activeClassName={s.active} exact>
						Cars 
					</NavLink>
				</li>
				<li>
					<NavLink to="/contact" activeClassName={s.active} exact>
						Contact
					</NavLink>
				</li>
			</ul>
		</div>
	)
}
