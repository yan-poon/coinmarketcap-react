export const getTextColor = (percentageChange) => {
    return percentageChange > 0 ? 'green' : 'red';
}

export const getDirectionTriangle = (percentageChange) => {
    return percentageChange > 0 ? '▲' : '▼';
}

export const getFormattedPrice = (price) => {
    if (price > 1) {
        return price.toLocaleString('en-US', { minimumFractionDigits: 4, maximumFractionDigits: 4 })
    }
    return price.toLocaleString('en-US', { minimumFractionDigits: 4, maximumFractionDigits: 8 })
}

export const getFormattedIntegerString = (marketCap) => {
    if(marketCap>1000000000000){
        return (marketCap/1000000000000).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + 'T'
    }else if(marketCap>1000000000){
        return (marketCap/1000000000).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + 'B'
    }
    return Math.round(marketCap).toLocaleString()
}