import React from 'react';
import { getDirectionTriangle, getTextColor, getFormattedPrice, getFormattedIntegerString } from '../services/UiItemService';

const CoinQuote = ({coinQuoteData,lastUpdateTime}) => {
    if (!coinQuoteData) {
        return <p>Loading...</p>
    } else {
        return (<div>
            <h2>{coinQuoteData.name} {coinQuoteData.symbol} <span style={{ color: getTextColor(coinQuoteData.quote.USD.percent_change_24h) }}>{getDirectionTriangle(coinQuoteData.quote.USD.percent_change_24h)} {coinQuoteData.quote.USD.percent_change_24h.toFixed(2)}% 24H</span> </h2>
            <h2>${getFormattedPrice(coinQuoteData.quote.USD.price)}</h2>
            <h3>Market cap: {getFormattedIntegerString(coinQuoteData.quote.USD.market_cap)}</h3>
            <h3>Volume (24h): {getFormattedIntegerString(coinQuoteData.quote.USD.volume_24h)}</h3>
            <h3>Total Supply: {getFormattedIntegerString(coinQuoteData.total_supply)} {coinQuoteData.symbol}</h3>
            <h3>Max Supply: {getFormattedIntegerString(coinQuoteData.max_supply)} {coinQuoteData.symbol}</h3>
            <p>Last updated at {lastUpdateTime}</p>
        </div>)
    }
};

export default CoinQuote;