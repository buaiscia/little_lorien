import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <div>
        <Link to="/">
            Go to homepage
        </Link>
        <div>
        <Link to="/art">
            Art
        </Link>
        <Link to="/about">
            About
        </Link>
        <Link to="/contact">
            Contact
        </Link>
        </div>
    </div>
)

export default Header;