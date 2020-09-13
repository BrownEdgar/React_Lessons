import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom"
export default function Navbar(props) {
    console.log(props);
    return (
        <div className="flex">
            <nav>
                <ul>
                    <li>
                        <Link to={{
                            pathname: "/users",
                            search: "?name=arsen",
                            hash: "#the-hash",
                            state: { fromDashboard: true }
                        }} >Users</Link>
                    </li>
                    <li>
                        <Link to="/about">about</Link>
                    </li>
                    <li>
                        <Link to="/blog">blog</Link>
                    </li>
                    <li>
                        <Link to="/contact">contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
