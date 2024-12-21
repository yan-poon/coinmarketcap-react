import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCoinQuoteData } from '../services/CMCApiService';
import CoinQuote from './CoinQuote';
import CoinNews from './CoinNews';
import '../css/CoinSummary.css';

const RELOAD_INTERVAL = process.env.REACT_APP_CMC_RELOAD_INTERVAL;

const CoinSummary = () => {
    const { coinId } = useParams();
    const [lastUpdateTime, setLastUpdateTime] = useState(new Date().toLocaleTimeString());
    const [coinQuoteData, setCoinQuoteData] = useState(null);
    const [coinSymbol, setCoinSymbol] = useState("");
    useEffect(() => {
        const getcoinQuoteData = async () => {
            const data = await fetchCoinQuoteData(coinId);
            setCoinQuoteData(data[`${coinId}`]);
            setLastUpdateTime(new Date().toLocaleTimeString());
            setCoinSymbol(data[`${coinId}`].symbol + "+" + data[`${coinId}`].name);
        };
        getcoinQuoteData();
        const interval = setInterval(getcoinQuoteData, RELOAD_INTERVAL)

        return () => {
            clearInterval(interval);
        }
    }, [coinId])


    if (coinQuoteData) {
        return (
            <div className="coin-news">
                <CoinQuote coinQuoteData={coinQuoteData} lastUpdateTime={lastUpdateTime} />
                <div className="coin-news">
                    <CoinNews coinSymbol={coinSymbol} />
                </div>
            </div>
        )
    }

};

export default CoinSummary;