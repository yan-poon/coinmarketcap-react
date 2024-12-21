import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

const CoinSummary = () => {
    const {coinId} = useParams();
    const [coinData, setCoinData] = useState(null);

    useEffect(() => {
        const getCoinData = async () => {
            // fetch data from API
        };
        getCoinData();
    })
    return (
        <div>
            <p>Coin Summary Page Work! coinId: {coinId}</p>
        </div>
    );
};

export default CoinSummary;