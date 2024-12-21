const NEWS_BASE_URL=process.env.REACT_APP_NEWS_BASE_URL;

export const fetchCoinNewsData = async (page=1,count=20,coinSymbol) => {
    try {
        var searchWords=["cryptocurrency"]
        if(coinSymbol){
            searchWords.push(coinSymbol)
        }
        const response = await fetch(`${NEWS_BASE_URL}/v7.0/news/search?q=${searchWords.join("+")}&mkt=en-us&safeSearch=moderate&textformat=raw&count=${count}&offset=${page-1}&sortBy=date`, {
            method: 'GET'
        });
        const data = await response.json();
        return data["value"];
    } catch (error) {
        console.error('Error:', error);
    }
}