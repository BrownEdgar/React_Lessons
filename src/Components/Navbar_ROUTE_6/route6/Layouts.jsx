// /////////////////////////////////////////////////////////////////////////////
// * Այստեղ Օգտագործվում է React-router-6 նոր հնարավորությունը "Outlet"-ը
// * "Outlet"-ը մատնացույց է անում էջի այն հատվածը որտեղ պետք է նկարվի մնացաց բազադրությունը,
// * Մեր օրինակում <header>-ի և <footer> -ի արանքւոմ
// * "APP"-ում այս կոմպոնենտը պետք է գրել յուրահատուկ նոր ձևով  և այն իր մեջ պետք է վերցնի մեր մնացած <Route>-ը այն էլ արտահայտվելու է այստեղ 	<Outlet />-ի միջոցով
// 
// /////////////////////////////////////////////////////////////////////////////

import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import './Navbar/Navbar.css'
export default function Layouts() {
  return (
    <>
      <header>
        <nav className="flex">
          <ul>
            <li>
              <NavLink to="/" className={(isActive) => isActive && "active-link"}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/friends" className={(isActive) => isActive && "active-link"}>friends</NavLink>
            </li>
            <li>
              <NavLink to="/posts" className={(isActive) => isActive && "active-link"}>Posts</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />

      <footer>copyRight 2022 SmartCode</footer>
    </>
  )
}
