import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CoinQuote from './CoinQuote';
import CoinNews from './CoinNews';

const RELOAD_INTERVAL = process.env.REACT_APP_CMC_RELOAD_INTERVAL;

const CoinSummary = () => {
    const { coinId } = useParams();

    return (<div>
        <CoinQuote coinId={coinId} />
        <CoinNews coinId={coinId} />
    </div>)

};

export default CoinSummary;