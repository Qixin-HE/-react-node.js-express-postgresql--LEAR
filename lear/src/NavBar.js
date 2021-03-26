import React from 'react';
import { Link } from 'react-router-dom';

//a Component
const NavBar = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/litterclassification">Litter Classification</Link>
            </li>
            <li>
                <Link to="/article-list">Laws and Penalties</Link>
            </li>
            <li>
                <Link to="/contactus">Contact Us</Link>
            </li>
        </ul>
    </nav>
);

export default NavBar;