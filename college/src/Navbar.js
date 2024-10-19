
import React from 'react';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Harvard Edu</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
