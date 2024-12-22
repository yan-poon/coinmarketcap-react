import React from 'react';
import CoinList from './CoinList';
import CoinNews from './CoinNews';

const Home = () => {
    return (
        <div className="home-container">
            <div className="left-column">
                <CoinList />
            </div>
            <div className="right-column">
                <CoinNews coinSymbol={""} />
            </div>
        </div>
    )

}

export default Home;