import React, { useEffect, useState } from 'react';
import {fetchCoinListData} from '../services/CMCApiService'
import CoinSummary from './CoinSummary'

const getTextColor = (percentageChange) => {
    return percentageChange > 0 ? 'green' : 'red';
}

const getDirectionTriangle = (percentageChange) => {
    return percentageChange > 0 ? '▲' : '▼';
}

const CoinList = () => {
    const [coins, setCoins] = useState([]);
    const [lastUpdateTime, setLastUpdateTime] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        const getData = async () => {
            const coinData = await fetchCoinListData(currentPage);
            setCoins(coinData);
            setLastUpdateTime(new Date().toLocaleTimeString());
        };
        getData();

        const interval = setInterval(getData, 30000)

        return () => {
            clearInterval(interval);
        }
    }, [currentPage]);

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
    };

    if (!coins.length) {
        return <p>Loading...</p>
    } else {
        return (
            <div>
                <p>Last updated at {lastUpdateTime}</p>
                <div>
                    <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                        Previous
                    </button>
                    <span> Page {currentPage} </span>
                    <button onClick={handleNextPage}>
                        Next
                    </button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Symbol</th>
                            <th>Price</th>
                            <th>1h %</th>
                            <th>24h %</th>
                            <th>7d %</th>
                            <th>30d %</th>
                            <th>Market Cap</th> 
                        </tr>
                    </thead>
                <tbody>
                {coins.map((coin) => (
                    <tr key={coin.id}>
                                <td>{coin.cmc_rank}</td>
                                <td>{coin.symbol}</td>
                                <td>${coin.quote.USD.price>=1? coin.quote.USD.price.toLocaleString('en-US', { minimumFractionDigits: 4, maximumFractionDigits: 4 }) : coin.quote.USD.price.toLocaleString('en-US', { minimumFractionDigits: 4, maximumFractionDigits: 8 })}</td>
                                <td style={{color:getTextColor(coin.quote.USD.percent_change_1h)}}>{getDirectionTriangle(coin.quote.USD.percent_change_1h)} {coin.quote.USD.percent_change_1h.toFixed(2)}</td>
                                <td style={{color:getTextColor(coin.quote.USD.percent_change_24h)}}>{getDirectionTriangle(coin.quote.USD.percent_change_24h)} {coin.quote.USD.percent_change_24h.toFixed(2)}</td>
                                <td style={{color:getTextColor(coin.quote.USD.percent_change_7d)}}>{getDirectionTriangle(coin.quote.USD.percent_change_7d)} {coin.quote.USD.percent_change_7d.toFixed(2)}</td>
                                <td style={{color:getTextColor(coin.quote.USD.percent_change_30d)}}>{getDirectionTriangle(coin.quote.USD.percent_change_30d)} {coin.quote.USD.percent_change_30d.toFixed(2)}</td>
                                <td>${Math.round(coin.quote.USD.market_cap).toLocaleString()}</td>

                    </tr>))}
                </tbody>
                </table>
            </div>
        )
    }

};

export default CoinList;