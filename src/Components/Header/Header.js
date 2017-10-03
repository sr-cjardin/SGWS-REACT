import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className='nav justify-content-center'>
    <Link className='nav-link active' to="/">Home</Link>
    <Link className='nav-link' to="/">Home</Link>
    <Link className='nav-link' to="/">Home</Link>
    <Link className='nav-link' to="/">Home</Link>
    <Link className='nav-link' to="/">Home</Link>
  </nav>
);

export { Header };
