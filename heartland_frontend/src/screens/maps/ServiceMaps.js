import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StarRatings from "react-star-ratings";

import { loadAllMaps } from "../../actions/mapsActions";
import { getRatings } from "../../actions/ratingActions";
import {
  changeBackgroundToWhite,
  changeNavbar,
} from "../../actions/rootActions";
import MapCards from "../../components/cards/MapCards";
import { Container } from "../../components/styled/Container.style";

import { ServiceContainer } from "./ServiceMaps.styles";

const ServiceMaps = () => {
  const dispatch = useDispatch();

  const { maps } = useSelector((state) => state.maps);
  const { rating } = useSelector((state) => state.rating);

  useEffect(() => {
    dispatch(changeBackgroundToWhite());
    dispatch(changeNavbar("white"));
    dispatch(loadAllMaps());
    dispatch(getRatings());
  }, []);

  return (
    <Container>
      <ServiceContainer>
        <div className="star-container-self">
          {rating && (
            <StarRatings
              rating={rating.avgCountry}
              starRatedColor="#02a89e"
              starHoverColor="#02a89e"
            />
          )}
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
