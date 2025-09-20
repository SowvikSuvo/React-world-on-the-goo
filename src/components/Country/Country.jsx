import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries, handleVisitedFlag }) => {
  const [Visited, setVisited] = useState(false);
  //   console.log(country.region.region);
  const handleVisited = () => {
    // setVisited(Visited ? false : true);
    setVisited(!Visited);
    handleVisitedCountries(country);
  };
  return (
    <div className={`country ${Visited && "country-visited"}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h3>Name: {country.name.common} </h3>
      <p>Population: {country.population.population}</p>
      <p>capital: {country.capital.capital} </p>
      <p>continents: {country.continents.continents} </p>
      <p>Region: {country.region.region} </p>
      <p>
        Area: {country.area.area}{" "}
        {country.area.area > 300000 ? "Big Country" : "Small Country"}
      </p>

      <button onClick={handleVisited}>
        {Visited ? "Visited" : "Not Visited"}
      </button>
      <button
        onClick={() => {
          handleVisitedFlag(country.flags.flags.png);
        }}
      >
        Add Visited Flag
      </button>
    </div>
  );
};

export default Country;
