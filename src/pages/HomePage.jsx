import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Forms from "../components/Forms/Forms";
import ListCountries from "../components/ListCountries/ListCountries";
import CardCountry from "../components/CardCountry/CardCountry";
import axios from "axios";
import { ALL_COUNTRIES } from "../config";

const HomePage = ({countries, setCountries}) => {
  const [filteredCountries, setFiltetedCountries] = useState(countries);

  const navigate = useNavigate();

  const handleSearch = (search, region) => {
    let data = [...countries];

    if (region) {
      data = data.filter((c) => c.region.includes(region));
    }

    if (search) {
      data = data.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()));
      }
      
      setFiltetedCountries(data || [])
  };

  useEffect(() => {
    if (!countries.length)
      axios.get(ALL_COUNTRIES).then(({ data }) => {
        console.log({ data });
        setCountries(data);
      });
  }, [countries.length, setCountries]);

    useEffect(() => {
        handleSearch('', '');
    });
    
  return (
    <>
          <Forms onSearch={handleSearch } />
      <ListCountries>
        {filteredCountries.map((c) => {
          const countryInfo = {
            img: c.flags.png,
            name: c.name,
            info: [
              {
                title: "Population:",
                description: c.population.toLocaleString(),
              },
              {
                title: "Rregion:",
                description: c.region,
              },
              {
                title: "Capital:",
                description: c.capital,
              },
            ],
          };

          return (
            <CardCountry
              key={c.name}
              onClick={() => navigate(`/country/${c.name}`)}
              {...countryInfo}
            />
          );
        })}
      </ListCountries>
    </>
  );
};

export default HomePage;
