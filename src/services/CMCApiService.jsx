const BASE_URL=process.env.REACT_APP_CMC_BASE_URL;

export const fetchCoinListData = async (page=1) => {
    const limit = 20;
    const startAt = (page - 1) * limit + 1;
    try {
        const response = await fetch(`${BASE_URL}/v1/cryptocurrency/listings/latest?limit=${limit}&start=${startAt}`, {
            method: 'GET'
        });
        const data = await response.json();
        return data["data"];
    } catch (error) {
        console.error('Error:', error);
    }
}

export const fetchCoinQuoteData = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/v2/cryptocurrency/quotes/latest?id=${id}`, {
            method: 'GET'
        });
        const data = await response.json();
        return data["data"];
    } catch (error) {
        console.error('Error:', error);
    }
}