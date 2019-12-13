import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar is-info" role="navigation" aria-label="main navigation">
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <Link to='/' className="navbar-item"><i className="fas fa-home"></i>Home</Link>
                        <Link to='/articles' className="navbar-item"><i className="far fa-newspaper"></i>Articles</Link>
                        <Link to='/aboutUs' className="navbar-item"><i className="far fa-address-card"></i>AboutUs</Link>
                        <Link to='/Add' className="navbar-item"><i className="far fa-address-card"></i>Add Article</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;