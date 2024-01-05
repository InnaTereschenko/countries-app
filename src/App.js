import { useState, useEffect } from "react";

import Header from "./components/Header/Header";
import Forms from "./components/Forms/Forms";
import Main from "./components/Main/Main";
import ListCountries from './components/ListCountries/ListCountries';
import CardCountry from "./components/CardCountry/CardCountry";
import axios from "axios";
import { ALL_COUNTRIES } from './config';


function App() {
  const [countries, setCountries] = useState([]);

  console.log(countries);
  useEffect(() => {
    axios.get(ALL_COUNTRIES).then(
      ({data})=>setCountries(data)
    )
  }, [])

  return (
    <>
    <Header />
    <Main>
        
        <Forms />
        <ListCountries>
          {countries.map((c) => {
            const countryInfo = {
              img: c.flags.png,
              name: c.name,
              info: [
                {
                  title: 'Population:',
                  description: c.population.toLocaleString(),
                },
                {
                  title: 'Rregion:',
                  description: c.region,
                },
                {
                  title: 'Capital:',
                  description: c.capital,
                }
              ],
            };

            return (
              <CardCountry key={c.name } {...countryInfo} />
            )
          })}
        </ListCountries>
        
    </Main>
    </>
  )
}

export default App;
