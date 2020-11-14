// /////////////////////////////////////////////////////////////////////////////
// /  NavLink 'npm instal react-router-dom --save' - գրադարանը  ներբեռնելու
// համար
//
// - href ատրիբուտը դառնում է to,որը ընդունում է ուղի(օր․"/about", առանց
// "․"-ի!),կամ օբյեկտ(օր․).` 	to={{pathname:"./developers,
// search:"?a=1&b=3",hash:"scroll-path" }}: որտեղ
// 	  - URL ուղին է http://localhost:3000/-ից հետո 	search - որոնողական
// պարամետրներ, որոնք կարող են օգտագործվել կամ React-ի, կամ սերվերի կողմից 	hash
// - scroll պարամետր, որը էջը կկանգնեցնի նշված "id"-ով էլեմենտի վրա(եթե կա)
// - activeClassName
// - activeStyle.

// - history -Router-ի մոնիպուլյացաների համար, Ամեն մի Router գեներացնում է
// history օբյեկտ, որը իր մեջ պահում է ուղիներ, և եթե URL հասցեում նկատում է
// փոփոխություններ՝ թարմացնում է կայքի ինտերֆեըսը։React Router-ի Մնացած
// Ֆունկցիաները իրենց աշխատանքում հիմնվում են այս օբյեկտի վրա, դրա համար նրանք
// պետք է գտնվեն Router-ի մեջ։
// - location
// - match -Երբ որ ուղիները համընկնում են գեներացվում է այս օբյեկտը,որը
// պարունակում է url —  location.pathname-i համեմատվող մասը path —  Route-ում
// գրված ուղին isExact —  Route-ում գրված path-ը === location.pathname params —
// объект содержит значения из path которые возвращает модуль path - to - regexp
// -test --> https://pshrmn.github.io/route-tester/#/ -path-ի արժեքներ - :number
// часть строки в "/roster/:number" означает, что часть path после /roster/
// будет получена в виде переменной и сохранится в match.params.number
// /////////////////////////////////////////////////////////////////////////////


import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import style from './Navbar.module.css'
class Nav extends Component {
	render() {
		return (
			<nav className={style.flex}>
				<h1>Logo</h1>
				<ul className="myMenu">
					<li>
						{/* exact ունի նաև NavLink, որպեսզի activeClassName լինկերը կոռեկտ փոխեն իրենց գույները։ՋՆջել ստուգելու համար */}
						<NavLink exact to='/' activeClassName={style.curent}>
							Home
                        </NavLink>
					</li>
					<li>
						<NavLink to={{
							pathname: "/about",
							state: {
								name: "asdasdsad"
							}
						}} >
							About
           	</NavLink>
					</li>
					<li>
						<NavLink
							to={{
								pathname: "/blog",
								search: "?a=1&b=3",
								hash: "scroll-path"
							}}
							activeClassName={style.curent}>
							Blog
            </NavLink>
					</li>
				</ul>
			</nav>
		);
	}
}
export default Nav;
