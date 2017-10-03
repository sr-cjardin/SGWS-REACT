import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Components/Logo/Logo';

const Header = () => (
    <div className="container">
        <nav className='nav justify-content-center'>
            <Link className='nav-link active' to="/portfolio">Our Portfolio</Link>
            <Link className='nav-link' to="/suppliers">Suppliers</Link>
            <Link className='nav-link' to="/careers">Careers</Link>
            <Link className='nav-link' to="/">
                <Logo />
            </Link>
            <Link className='nav-link' to="/our-causes">Our Causes</Link>
            <Link className='nav-link' to="/news">News</Link>
            <Link className='nav-link' to="/about-us">About Us</Link>
        </nav>
    </div>
);

export { Header };
