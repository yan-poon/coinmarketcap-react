import React, { useEffect, useState } from 'react';
import { fetchCoinNewsData } from '../services/NewsApiService';
import '../css/CoinNews.css';

const CoinNews = ({coinSymbol=""}) => {
    const [coinNewsData, setcoinNewsData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [count, setCount] = useState(20);

    useEffect(() => {
        const getCoinNewsData = async (symbol) => {
            const data = await fetchCoinNewsData(count, currentPage, coinSymbol);
            setcoinNewsData(data);
        };
        getCoinNewsData(count, currentPage, coinSymbol);

    }, [currentPage])

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
    };

    if (!coinNewsData) {
        return <p>Loading...</p>
    } else {
        var title="Latest news of Cryptocurrency";
        if(coinSymbol){
            const texts=coinSymbol.split("+")
            title=`Latest News of ${texts[0]} (${texts[1]}})`;
        }
        return (<div>
            <h2>{title}</h2>
            <ul>
                {coinNewsData.map((coinNews) => (
                    <li key={coinNewsData.indexOf(coinNews)} style={{ cursor: 'pointer' }} onClick={() => window.open(coinNews.url, '_blank')}>
                        <h3>{coinNews.name}</h3>
                        <p>{coinNews.description}</p>
                        <p className="details">Click for Details</p>
                    </li>))}
            </ul>
            <div>
                <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                    Previous
                </button>
                <span> Page {currentPage} </span>
                <button onClick={handleNextPage}>
                    Next
                </button>
            </div>
        </div>)
    }
};

export default CoinNews;