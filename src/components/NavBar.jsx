import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/players">All Players</Link>
                </li>
                <li>
                    <Link to="/new-player">New Player</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;