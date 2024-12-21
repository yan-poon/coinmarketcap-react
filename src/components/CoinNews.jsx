import React, { useEffect, useState } from 'react';
import { fetchCoinNewsData } from '../services/NewsApiService';

const CoinNews = ({ symbol, count, page }) => {
    const [coinNewsData, setcoinNewsData] = useState([]);

    useEffect(() => {
        const getCoinNewsData = async (count, page, symbol) => {
            if (!symbol) {
                symbol = ""
            }
            const data = await fetchCoinNewsData(count, page, symbol);
            setcoinNewsData(data);
        };
        getCoinNewsData(count, page, symbol);

    }, [page])

    if (!coinNewsData) {
        return <p>Loading...</p>
    } else {
        return (<div>
            <ul>
                {coinNewsData.map((coinNews) => (
                    <li key={coinNewsData.indexOf(coinNews)} style={{ cursor: 'pointer' }} onClick={() => window.open(coinNews.url, '_blank')}>
                        <h3>{coinNews.name}</h3>
                        <p>{coinNews.description}</p>
                        <p>Click for Details</p>
                    </li>))}
            </ul>
        </div>)
    }
};

export default CoinNews;