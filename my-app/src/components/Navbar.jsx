import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav style={{ padding: '1rem', background: '#eee', marginBottom: '1rem' }}>
            <Link to="/home" style={{ margin: '0 1rem' }}>Home</Link>
            <Link to="/about" style={{ margin: '0 1rem' }}>About Us</Link>
            <Link to="/contact" style={{ margin: '0 1rem' }}>Contact Us</Link>
        </nav>
    );
}

export default Navbar;
