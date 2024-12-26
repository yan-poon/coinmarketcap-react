import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../css/Header.css';

function Header() {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleHeaderClick = () => {
        navigate('/coins');
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="header-logo" onClick={handleHeaderClick}>
                <h1>One CharlotteWS Crypto</h1>
                <div className="menu-icon" onClick={toggleMenu}>
                    &#9776; {/* Hamburger menu icon */}
                </div>
            </div>
            <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
                <ul className="navbar-links">
                    <li>
                        <Link to="/markets">Markets</Link>
                    </li>
                    <li>
                        <Link to="/news">News</Link>
                    </li>
                    <li>
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;