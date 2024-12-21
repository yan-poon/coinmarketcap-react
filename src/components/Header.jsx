import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {

    const navigate = useNavigate();

    const handleHeaderClick = () => {
        navigate('/coins');
    };
    return (
        <header onClick={handleHeaderClick} style={{ cursor: 'pointer' }}>
            <h1>One CharlotteWS Crypto</h1>
        </header>
    );
};

export default Header;