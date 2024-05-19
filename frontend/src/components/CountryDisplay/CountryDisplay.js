import './CountryDisplay.css';

const CountryDisplay = ({ country, translations }) => {
    
    if (!translations.length) {
        return <div className='display-wrapper'>
            <p>Country not found.</p>
        </div>
    } else {
        return (<div className='display-wrapper'>
            <p>Translations of {country}</p>
            <table>
                <tr>
                    <th>Country</th>
                    <th>Official Name</th>
                    <th>Common Name</th>
                </tr>
                {translations.map((translation, index) => {
                    const name = Object.keys(translation)[0];
                    return <tr key={index}>
                        <td>{name}</td>
                        <td>{translation[name]['official']}</td>
                        <td>{translation[name]['common']}</td>
                    </tr>
                })}
            </table>
        </div>)
    }
}

export default CountryDisplay;