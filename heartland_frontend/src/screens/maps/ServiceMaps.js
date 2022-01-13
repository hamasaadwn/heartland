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
    console.log(rating);
  };

  return (
    <Container>
      <ServiceContainer>
        <div className="star-container-self">
          <StarRatings
            rating={rating}
            starRatedColor="blue"
            changeRating={changeRating}
            numberOfStars={5}
            name="rating"
          />
          {/* <input type="radio" name="star" id="five" />
          <label htmlFor="five">
            <svg className="star">
              <use xlinkHref="#star" />
            </svg>
          </label>
          <input type="radio" name="star" id="four" />
          <label htmlFor="four">
            <svg className="star">
              <use xlinkHref="#star" />
            </svg>
          </label>
          <input type="radio" name="star" id="three" />
          <label htmlFor="three">
            <svg className="star">
              <use xlinkHref="#star" />
            </svg>
          </label>
          <input type="radio" name="star" id="two" />
          <label htmlFor="two">
            <svg className="star">
              <use xlinkHref="#star" />
            </svg>
          </label>
          <input type="radio" name="star" id="one" />
          <label htmlFor="one">
            <svg className="star">
              <use xlinkHref="#star" />
            </svg>
          </label>
        </div>
        <div className="star-source">
          <svg>
            <linearGradient
              x1="50%"
              y1="5.41294643%"
              x2="87.5527344%"
              y2="65.4921875%"
              id="grad"
            >
              <stop stopColor="#02a89e" offset="0%"></stop>
              <stop stopColor="#02a89e" offset="60%"></stop>
              <stop stopColor="#02a89e" offset="100%"></stop>
            </linearGradient>
            <symbol id="star" viewBox="153 89 106 108">
              <polygon
                id="star-shape"
                stroke="url(#grad)"
                strokeWidth="5"
                fill="currentColor"
                points="206 162.5 176.610737 185.45085 189.356511 150.407797 158.447174 129.54915 195.713758 130.842203 206 95 216.286242 130.842203 253.552826 129.54915 222.643489 150.407797 235.389263 185.45085"
              ></polygon>
            </symbol>
          </svg> */}
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
