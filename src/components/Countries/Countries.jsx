import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countriesPromise }) => {

    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    const handleVisitedCountriesCount = (country) => {
        // visitedCountries.push(...country)
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries)
        // console.log(country.name.common)
    }

    const handleVisitedFlags = (flags) => {
        const newVisitedFlags = [...visitedFlags, flags];
        setVisitedFlags(newVisitedFlags);


        console.log('clicked visited flags', flags)
    }
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    console.log(countries)
    // const { } = countries;
    return (
        <div>
            <h1>My Countriessssssssssss:{countries.length}</h1>
            <h3>Totalllllll country visited:{visitedCountries.length}</h3>
            <h3>Flags visited:{visitedFlags.length}</h3>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>

            <div className='visited-flags-con'>
                {
                    visitedFlags.map((flag, index) => <img key={index} src={flag}></img>)
                }
            </div>
            <div className='countries'>
                {
                    countries.map(country => <Country key={country.cca3.cca3}
                        handleVisitedCountriesCount={handleVisitedCountriesCount}
                        handleVisitedFlags={handleVisitedFlags} country={country}></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;