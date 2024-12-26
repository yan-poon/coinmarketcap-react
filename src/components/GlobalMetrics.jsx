import React, { useState, useEffect } from "react";
import { fetchGlobalMetricsData } from '../services/CMCApiService';
import { getFormattedIntegerString, getDirectionTriangle, getTextColor } from '../services/UiItemService';
import '../css/GlobalMetrics.css';

const RELOAD_INTERVAL = process.env.REACT_APP_CMC_RELOAD_INTERVAL;

function GlobalMetrics() {
    const [globalMetricsData, setGlobalMetricsData] = useState(null);

    useEffect(() => {
        const getGlobalMetricsData = async () => {
            const data = await fetchGlobalMetricsData();
            setGlobalMetricsData(data);
        };
        getGlobalMetricsData();
        const interval = setInterval(getGlobalMetricsData, RELOAD_INTERVAL * 12)

        return () => {
            clearInterval(interval);
        }
    }, [1])

    if (!globalMetricsData) {
        return <p>Loading...</p>;
    } else {
        return (
            <div className="global-metrics-container">
                <div className="global-metrics-item">
                    <span style={{ marginLeft: "10px" }}>Market Cap: </span><span>USD{getFormattedIntegerString(globalMetricsData.quote.USD.total_market_cap)}</span><span style={{ color: getTextColor(globalMetricsData.quote.USD.total_market_cap_yesterday_percentage_change) }}>{getDirectionTriangle(globalMetricsData.quote.USD.total_market_cap_yesterday_percentage_change)} {globalMetricsData.quote.USD.total_market_cap_yesterday_percentage_change.toFixed(2)}%</span>
                </div>
                <div className="global-metrics-item">
                    <span style={{ marginLeft: "10px" }}>24H Volume: </span><span>USD{getFormattedIntegerString(globalMetricsData.quote.USD.total_volume_24h)}</span><span style={{ color: getTextColor(globalMetricsData.quote.USD.total_volume_24h_yesterday_percentage_change) }}>{getDirectionTriangle(globalMetricsData.quote.USD.total_volume_24h_yesterday_percentage_change)} {globalMetricsData.quote.USD.total_volume_24h_yesterday_percentage_change.toFixed(2)}%</span>
                </div>
                <div className="global-metrics-item">
                    <span style={{ marginLeft: "10px" }}>Dominance: BTC={globalMetricsData.btc_dominance.toFixed(2)}% ETH={globalMetricsData.eth_dominance.toFixed(2)}%</span>
                </div>
            </div>
        );
    }

}
export default GlobalMetrics;