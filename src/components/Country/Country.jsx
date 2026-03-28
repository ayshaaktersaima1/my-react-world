import React, { useState } from 'react';
import './Country.css'

const Country = ({ country, handleVisitedCountriesCount, handleVisitedFlags }) => {

    // console.log(handleVisitedCountriesCount)
    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        // if (visited) {
        //     setVisited(false)
        // }
        // else {
        //     setVisited(true)
        // }
        setVisited(!visited);
        handleVisitedCountriesCount(country);
    }


    return (
        <div className={`country ${visited ? 'country-visited' : 'not-visited'}`}>
            <h3>Name:{country.name.common}</h3>
            <img src={country?.flags?.flags?.png} alt="" />
            <h3>Population:{country.population.population}</h3>
            <p>area:{country.area.area}{country.area.area > 300000 ? 'big country' : 'small country'}</p>
            <button onClick={handleVisited}>
                {
                    visited ? 'Visited' : 'Not visited'
                }
            </button>
            <button onClick={() => { handleVisitedFlags(country?.flags?.flags?.png) }}>Add visited flag</button>
        </div >
    );
};

export default Country;