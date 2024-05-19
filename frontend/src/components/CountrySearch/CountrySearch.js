import { useState } from 'react';

import './CountrySearch.css';
import { fetchTranslations } from '../../service/backend.service';

const CountrySearch = ({ setCountry, setTranslations }) => {
    const [countryName, setCountryName] = useState('');

    const handleClick = async () => {
        const response = await fetchTranslations(countryName);
        setTranslations(response);
        setCountry(countryName);
        setCountryName('');
    }
    
    return (<div>
        <input type="text" placeholder="Country Name" value={countryName} onChange={(e) => setCountryName(e.target.value)}/>
        <button onClick={handleClick}>Search</button>
    </div>)
}

export default CountrySearch;