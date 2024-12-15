import React, { useEffect, useState } from 'react';
import CoinSummary from './CoinSummary'

const fetchCoinData = async () => {
    try {
        const response = await fetch('https://one-charlottews-apim.azure-api.net/finance/api/coinmarketcap/v1/cryptocurrency/listings/latest', {
            method: 'GET'
        });
        const data = await response.json();
        return data["data"];
    } catch (error) {
        console.error('Error:', error);
    }
}

const CoinList = () => {
    const [coins, setCoins] = useState([]);
    const [lastUpdateTime, setLastUpdateTime] = useState("");
    useEffect(() => {
        const getData = async () => {
            const coinData = await fetchCoinData();
            setCoins(coinData);
            setLastUpdateTime(new Date().toLocaleTimeString());
        };
        getData();

        const interval = setInterval(getData, 30000)

        return () => {
            clearInterval(interval);
        }
    }, []);
    if (!coins.length) {
        return <p>Loading...</p>
    } else {
        return (
            <div>
                <p>Last updated at {lastUpdateTime}</p>
                <ul>

                    {coins.map((coin) => (
                        <CoinSummary coin={coin} key={coin.id} />
                    ))}
                </ul>
            </div>
        )
    }

};

export default CoinList;