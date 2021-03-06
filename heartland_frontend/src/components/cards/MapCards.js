import React from "react";
import { Link } from "react-router-dom";

import MapsCardsStyles from "../styled/MapsCard.styles";

const MapCards = ({ title, img, link }) => {
  let image = img.replace("\\", "/");
  return (
    <Link to={link}>
      <MapsCardsStyles img={`${'https://api.cccht.org'}${image}`}>
        <h3>{title}</h3>
      </MapsCardsStyles>
    </Link >
  );
};

export default MapCards;
