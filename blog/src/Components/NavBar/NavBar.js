import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar is-info" role="navigation" aria-label="main navigation">
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <Link to='/' className="navbar-item">Home</Link>
                        <Link to='/articles' className="navbar-item">Articles</Link>
                        <Link to='/aboutUs' className="navbar-item">AboutUs</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;