import React from 'react';

const CoinSummary = ({coin}) => {
    return (
        <div>
            {coin.symbol} {coin.quote.USD.price}
        </div>
    );
};

export default CoinSummary;