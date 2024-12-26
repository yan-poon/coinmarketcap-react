import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCoinQuoteData, fetchCoinMetadata } from '../services/CMCApiService';
import CoinQuote from './CoinQuote';
import CoinNews from './CoinNews';
import '../css/CoinSummary.css';
import CoinMetadata from './CoinMetadata';
import SocialMediaShare from './SocialMediaShare';

const RELOAD_INTERVAL = process.env.REACT_APP_CMC_RELOAD_INTERVAL;

const CoinSummary = () => {
    const { coinId } = useParams();
    const [lastUpdateTime, setLastUpdateTime] = useState(new Date().toLocaleTimeString());
    const [coinQuoteData, setCoinQuoteData] = useState(null);
    const [coinSymbol, setCoinSymbol] = useState("");
    const [coinMetadata, setCoinMetadata] = useState(null);
    const [shareMessage, setShareMessage] = useState("");
    const shareUrl = window.location.href;
    
    useEffect(() => {
        const getcoinQuoteData = async () => {
            const data = await fetchCoinQuoteData(coinId);
            setCoinQuoteData(data[`${coinId}`]);
            setLastUpdateTime(new Date().toLocaleTimeString());
            setCoinSymbol(data[`${coinId}`].symbol + "+" + data[`${coinId}`].name);
            setShareMessage(`Check out ${data[`${coinId}`].symbol} on OneCharlotteWS Crypto!`);
        };
        const getcoinMetadata = async () => {
            const data = await fetchCoinMetadata(coinId);
            setCoinMetadata(data[`${coinId}`]);
        };
        getcoinQuoteData();
        getcoinMetadata();
        const interval = setInterval(getcoinQuoteData, RELOAD_INTERVAL)

        return () => {
            clearInterval(interval);
        }
    }, [coinId])


    if (!coinMetadata){
        return <p>Loading...</p>;
    }else {
        return (
            <div className="coin-summary">
                <div className="left-column">
                    <CoinQuote coinQuoteData={coinQuoteData} lastUpdateTime={lastUpdateTime} />
                    <SocialMediaShare shareUrl={shareUrl} shareMessage={shareMessage} />
                    <CoinMetadata coinMetadata={coinMetadata} />
                </div>
                <div className="right-column">
                    <CoinNews coinSymbol={coinSymbol} />
                </div>
            </div>
        )
    }

};

export default CoinSummary;