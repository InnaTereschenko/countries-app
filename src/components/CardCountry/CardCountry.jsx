import React from "react";
import {
  CardWrapper,
  CardInfo,
  CardTitle,
  CardImg,
  CardList,
  CardListItem,
} from "./CardCountry.styled";

const CardCountry = ({img, name, info = [], onClick}) => {
  return (
    <CardWrapper onClick={onClick}>
          <CardImg src={img} alt={name} />
      <CardInfo>
        <CardTitle>{name}</CardTitle>
        <CardList>
          {info.map((el) => (
            <CardListItem key={el.title}>
              <b>{el.title}:</b>
              {el.description}
            </CardListItem>
          ))}
        </CardList>
      </CardInfo>
    </CardWrapper>
  );
};

export default CardCountry;
