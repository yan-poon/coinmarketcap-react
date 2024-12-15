import React from 'react';

const CoinSummary = ({coin}) => {
    return (
        <div>
            {coin.symbol} {coin.quote.USD.price.toFixed(4)}
        </div>
    );
};

export default CoinSummary;