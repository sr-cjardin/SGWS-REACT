import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <ul className="footer">
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/portfolio">Portfolio</Link>
    </li>
  </ul>
);

export { Footer };
