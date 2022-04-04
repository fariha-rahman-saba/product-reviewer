import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav>

                <Link className='link' to="/home">HOME</Link>
                <Link className='link' to="/reviews">REVIEWS</Link>
                <Link className='link' to="/dashboard">DASHBOARD</Link>
                <Link className='link' to="/blogs">BLOGS</Link>
                <Link className='link' to="/about">ABOUT</Link>

            </nav>
        </div>
    );
};

export default Header;