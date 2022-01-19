import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StarRatings from "react-star-ratings";

import { loadAllMaps } from "../../actions/mapsActions";
import {
  changeBackgroundToWhite,
  changeNavbar,
} from "../../actions/rootActions";
import MapCards from "../../components/cards/MapCards";
import { Container } from "../../components/styled/Container.style";

import { ServiceContainer } from "./ServiceMaps.styles";

const ServiceMaps = () => {
  const dispatch = useDispatch();

  const [rating, setRating] = useState(0);

  const { maps } = useSelector((state) => state.maps);

  useEffect(() => {
    dispatch(changeBackgroundToWhite());
    dispatch(changeNavbar("white"));
    dispatch(loadAllMaps());
  }, []);

  const changeRating = (newRating) => {
    setRating(newRating);
  };

  return (
    <Container>
      <ServiceContainer>
        <div className="star-container-self">
          <StarRatings
            rating={rating}
            starRatedColor="#02a89e"
            starHoverColor="#02a89e"
            changeRating={changeRating}
            numberOfStars={5}
            name="rating"
          />
        </div>

        <div className="map-image">
          {maps &&
            maps.map((m) => (
              <MapCards
                img={m.thumbnail}
                title={m.name}
                link={`/maps/${m.name}`}
                key={m._id}
              />
            ))}

          {/* <MapCards img="/images/img2-01.png" title="Baghdad" link="/baghdad" />
          <MapCards img="/images/img3-01.png" title="Mosul" link="/mosul" />
          <MapCards img="/images/img4-01.png" title="Erbil" link="/erbil" />
          <MapCards
            img="/images/img5-01.png"
            title="Sulaymaniah"
            link="/slemany"
          />
          <MapCards img="/images/img6-01.png" title="Kirkuk" link="/kirkuk" /> */}
        </div>
      </ServiceContainer>
    </Container>
  );
};

export default ServiceMaps;
