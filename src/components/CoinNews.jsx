import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CoinNews = () => {
    const { coinId } = useParams();
    const [coinNewsData, setcoinNewsData] = useState([]);
    
    useEffect(() => {
        const getCoinNewsData = async () => {

        };
        getCoinNewsData();

    }, [coinId])

    if (!coinNewsData.length) {
        return <p>Loading...</p>
    } else {
        return (<div>
            <p>Coin News works!</p>
        </div>)
    }
};

export default CoinNews;