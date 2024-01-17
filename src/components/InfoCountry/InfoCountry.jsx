import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  InfoWrapper,
  InfoImg,
  InfoTitle,
  InfoList,
  ListItem,
    InfoListGroup,
    Meta,
    TagGroup,
  Tag,
} from "./InfoCountry.styled";

import { filterByCode } from '../../config';



const InfoCountry = (props) => {
  const {
    name,
    nativeName,
    flag,
    capital,
    population,
    region,
    subregion,
    topLevelDomain,
    currencies = [],
    languages = [],
    borders = [],
    push,
  } = props;

    const [neighbors, setNeighbors] = useState([]);
    
    useEffect(() => {
        if (borders.length)
            axios.get(filterByCode(borders))
                .then(({ data }) => setNeighbors(data.map((c) => c.name)));
        
    }, [borders]);

  return (
    <InfoWrapper>
      <InfoImg src={flag} alt={name} />

      <div>
        <InfoTitle>{name}</InfoTitle>
        <InfoListGroup>
          <InfoList>
            <ListItem>
              <b>Native Name:</b>
              {nativeName}
            </ListItem>
            <ListItem>
              <b>Population:</b>
              {population}
            </ListItem>
            <ListItem>
              <b>Region:</b>
              {region}
            </ListItem>
            <ListItem>
              <b>Subregion:</b>
              {subregion}
            </ListItem>
            <ListItem>
              <b>Capital:</b>
              {capital}
            </ListItem>
          </InfoList>

          <InfoList>
            <ListItem>
              <b>Top Level Domain:</b>{" "}
              {topLevelDomain.map((d) => (
                <span key={d}>{d}</span>
              ))}
            </ListItem>
            <ListItem>
              <b>Currency:</b>
              {""}
              {currencies.map((c) => (
                <span key={c.code}>{c.name} </span>
              ))}
            </ListItem>
            <ListItem>
              <b>Languages</b>
              {""}
              {languages.map((l) => (
                <span span key={l.name}>
                  {l.name}
                </span>
              ))}
            </ListItem>
          </InfoList>
              </InfoListGroup>
              
              <Meta>
                  <b>Border Countries</b>
                  {!borders.length ? (
                      <span>There are no border countries</span>
                  ) : (<TagGroup>
                          {neighbors.map((b) => (<Tag key={b} onClick={() => { push(`/country/${b}`) }}>{ b}</Tag>))}
                  </TagGroup>)}
              </Meta>
      </div>
    </InfoWrapper>
  );
};

export default InfoCountry;
