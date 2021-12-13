import React from "react";
import { Link } from "react-router-dom";

import MapsCardsStyles from "../styled/MapsCard.styles";

const MapCards = ({ title, img, link }) => {
  return (
    <Link to={link}>
      <MapsCardsStyles img={img}>
        <h3>{title}</h3>
      </MapsCardsStyles>
    </Link>
  );
};

export default MapCards;
