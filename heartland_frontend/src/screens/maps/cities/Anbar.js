import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";

import { loadMapByCity } from "../../../actions/mapsActions";
import { rate } from "../../../actions/ratingActions";

import {
  changeBackgroundToWhite,
  changeNavbar,
  showSuccess,
} from "../../../actions/rootActions";
import HugeSuccess from "../../../components/messages/HugeSuccess";
import { Container } from "../../../components/styled/Container.style";
import { LittleBox } from "../../../components/styled/LittleBox.styles";

import { CityContainer } from "./City.styles";

const Anbar = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const [rating, setRating] = useState(0);
  const [rated, setRated] = useState(0);

  const city = params.city;

  const { map } = useSelector((state) => state.map);

  useEffect(() => {
    dispatch(changeBackgroundToWhite());
    dispatch(changeNavbar("white"));
    dispatch(loadMapByCity(city));
  }, []);

  const changeRating = (newRating) => {
    setRating(newRating);
  };

  useEffect(() => {
    if (rating > 0) {
      dispatch(rate("service", rating));
      dispatch(showSuccess());
      setRated(rating);
    }
    const serviceRatingFromStorage = localStorage.getItem("serviceRate")
      ? JSON.parse(localStorage.getItem("serviceRate"))
      : null;
    if (serviceRatingFromStorage) {
      setRated(serviceRatingFromStorage.rate);
    }
  }, [rating]);

  return (
    <Container>
      <HugeSuccess />
      <CityContainer>
        <div className="h1-t">
          <h1>{map && map.name}</h1>
        </div>
        <div className="img-map">
          <img src={map && map.countryMap} alt="" />
          <img src={map && map.cityMap} alt="" />
          <img src={map && map.cityMapAdd} alt="" />
        </div>
        <div className="detail-container">
          {" "}
          <div className="map-detail">
            {map &&
              map.branch.map((b, i) => (
                <p key={i}>
                  <LittleBox bg="#00a79b"></LittleBox>
                  <span style={{ color: "#02a89e" }}>name:</span> {b.address}
                  <span style={{ color: "#02a89e" }}> P.number: </span>{" "}
                  {b.phone} {"  "}
                  <span style={{ color: "#02a89e" }}>E:</span>
                  {b.email}
                  <br />
                </p>
              ))}
          </div>
        </div>
        <div className="star-container-self">
          {rated ? (
            <StarRatings
              rating={rated}
              starRatedColor="#02a89e"
              starHoverColor="#02a89e"
            />
          ) : (
            <StarRatings
              rating={rating}
              starRatedColor="#02a89e"
              starHoverColor="#02a89e"
              changeRating={changeRating}
              numberOfStars={5}
              name="rating"
            />
          )}
        </div>
      </CityContainer>
    </Container>
  );
};

export default Anbar;
