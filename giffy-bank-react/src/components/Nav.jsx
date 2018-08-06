import React from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {
    return (
        <header>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/gifs'>Gifs</Link></li>
            </ul>
        </header>
    )
};

export default Nav;