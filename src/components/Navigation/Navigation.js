import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

function Navigation() {
    return (
        <nav className="navigation">
            <ul className="navigation__list">
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/hello'>Hello</Link>
                </li>
                <li>
                    <Link to='/page'>Page</Link>
                </li>
            </ul>
        </nav>
    )
};

export default Navigation;