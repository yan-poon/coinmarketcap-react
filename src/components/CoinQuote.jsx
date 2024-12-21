import React, { useEffect, useState } from 'react';
import { fetchCoinQuoteData } from '../services/CMCApiService';
import { getDirectionTriangle, getTextColor, getFormattedPrice, getFormattedIntegerString } from '../services/UiItemService';

const RELOAD_INTERVAL = process.env.REACT_APP_CMC_RELOAD_INTERVAL;

const CoinQuote = ({coinId}) => {
    const [lastUpdateTime, setLastUpdateTime] = useState(new Date().toLocaleTimeString());
    const [coinQuoteData, setcoinQuoteData] = useState(null);

    useEffect(() => {
        const getcoinQuoteData = async (coinId) => {
            const data = await fetchCoinQuoteData(coinId);
            setcoinQuoteData(data[`${coinId}`]);
            setLastUpdateTime(new Date().toLocaleTimeString());
        };
        getcoinQuoteData(coinId);

        const interval = setInterval(getcoinQuoteData, RELOAD_INTERVAL)

        return () => {
            clearInterval(interval);
        }
    }, [coinId])

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