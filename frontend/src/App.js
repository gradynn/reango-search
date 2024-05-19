import { useState } from 'react';

import './App.css';
import CountryDisplay from './components/CountryDisplay/CountryDisplay';
import CountrySearch from './components/CountrySearch/CountrySearch';

function App() {
  const [translations, setTranslations] = useState([]);
  const [country, setCountry] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <h2>Reango Search</h2>
        <p>Enter a country's name to get back a list of its names across the world.</p>
        <CountrySearch setCountry={setCountry} setTranslations={setTranslations}/>
        <CountryDisplay country={country} translations={translations}/>
      </header>
    </div>
  );
}

export default App;
