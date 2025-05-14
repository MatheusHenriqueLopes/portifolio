import { Link } from "react-router-dom"

import { useState, useEffect } from "react"




import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
        <h2>
            <Link to="/">Matheus Henirque</Link>
        </h2>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/skills">Skills</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar