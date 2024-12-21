import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {fetchCoinListData} from '../services/CMCApiService'
import { getDirectionTriangle, getTextColor, getFormattedPrice, getFormattedIntegerString } from '../services/UiItemService';
import CoinNews from './CoinNews';

const RELOAD_INTERVAL = process.env.REACT_APP_CMC_RELOAD_INTERVAL;

const CoinList = () => {
    const [coins, setCoins] = useState([]);
    const [lastUpdateTime, setLastUpdateTime] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const navigate= useNavigate();

    useEffect(() => {
        const getData = async () => {
            const coinsData = await fetchCoinListData(currentPage);
            setCoins(coinsData);
            setLastUpdateTime(new Date().toLocaleTimeString());
        };
        getData();

        const interval = setInterval(getData, RELOAD_INTERVAL)

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

    const handleRowClick = (coinId) => {
        navigate(`/coins/${coinId}`);
    }

    if (!coins.length) {
        return <p>Loading...</p>
    } else {
        return (
            <div>
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
                    <tr key={coin.id} onClick={()=> handleRowClick(coin.id)} style={{ cursor: 'pointer' }}>
                                <td>{coin.cmc_rank}</td>
                                <td>{coin.symbol}</td>
                                <td>${getFormattedPrice(coin.quote.USD.price)}</td>
                                <td style={{color:getTextColor(coin.quote.USD.percent_change_1h)}}>{getDirectionTriangle(coin.quote.USD.percent_change_1h)} {coin.quote.USD.percent_change_1h.toFixed(2)}</td>
                                <td style={{color:getTextColor(coin.quote.USD.percent_change_24h)}}>{getDirectionTriangle(coin.quote.USD.percent_change_24h)} {coin.quote.USD.percent_change_24h.toFixed(2)}</td>
                                <td style={{color:getTextColor(coin.quote.USD.percent_change_7d)}}>{getDirectionTriangle(coin.quote.USD.percent_change_7d)} {coin.quote.USD.percent_change_7d.toFixed(2)}</td>
                                <td style={{color:getTextColor(coin.quote.USD.percent_change_30d)}}>{getDirectionTriangle(coin.quote.USD.percent_change_30d)} {coin.quote.USD.percent_change_30d.toFixed(2)}</td>
                                <td>${getFormattedIntegerString(coin.quote.USD.market_cap)}</td>

                    </tr>))}
                </tbody>
                </table>
                <p>Last updated at {lastUpdateTime}</p>
                <CoinNews symbol={""} count={20} page={0} />
            </div>
            
        )
    }

};

export default CoinList;