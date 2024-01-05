import React from "react";
import {
  CardWrapper,
  Card,
  CardTitle,
  CardImg,
  CardList,
  CardListItem,
} from "./CardCountry.styled";

const CardCountry = (img, name, info = [], onClick) => {
  return (
    <CardWrapper onClick={onClick}>
      <CardImg src={img} />
      <Card>
        <CardTitle>{name}</CardTitle>
        <CardList>
          {info.map((el) => (
            <CardListItem key={el.title}>
              <b>{el.title}:</b>
              {el.description}
            </CardListItem>
          ))}
        </CardList>
      </Card>
    </CardWrapper>
  );
};

export default CardCountry;
