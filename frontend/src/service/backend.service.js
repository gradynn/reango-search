const BASE_URL = 'http://127.0.0.1:8000/api/'

export const fetchTranslations = async (countryName) => {
    const response = await fetch(
        BASE_URL + 'search/' + countryName,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }
    )
    return response.json()
};