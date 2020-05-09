// Header-ը ստեղծում է  link-եր որպեսզի կարողանանք անցում կատարել Route-ի միջև
import React from 'react'
import {Link} from 'react-router-dom'
import "./Header.module.css";

export default function Header() {

    return (
        <header>
            <nav>
                <ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
                    <li>
						<Link to='/quizCreator'>Quiz Creator</Link>
                    </li>
                    <li>
						<Link to='/quizList'>Quiz List</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
