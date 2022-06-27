import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";

import { loadMapByCity } from "../../../actions/mapsActions";
import { rate } from "../../../actions/ratingActions";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  const { map } = useSelector((state) => state.map);

  useEffect(() => {
    dispatch(changeBackgroundToWhite());
    dispatch(changeNavbar("white"));
    dispatch(loadMapByCity(city));
  }, [dispatch, city]);

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
  }, [rating, dispatch]);

  return (
    <Container>
      <HugeSuccess />
      <CityContainer>
        <div className="h1-t">
          <h1>{map && map.name}</h1>
        </div>
        <div className="img-map">
          <img
            src={map && `${'https://api.cccht.org'}${map.countryMap}`}
            alt=""
          />
          <img
            src={map && `${'https://api.cccht.org'}${map.cityMap}`}
            alt=""
          />
          <img
            src={map && `${'https://api.cccht.org'}${map.cityMapAdd}`}
            alt=""
          />
        </div>
        <div className="detail-container">
          {" "}
          <div className="map-detail">
            {map &&
              map.branch.map((b, i) => (
                <p key={i}>
                  <LittleBox bg="#00a79b"></LittleBox>
                  <span style={{ color: "#02a89e" }}>{t("name")}:</span> {b.address}
                  <span style={{ color: "#02a89e" }}> {t("phone")}: </span>{" "}
                  {b.phone} {"  "}
                  <span style={{ color: "#02a89e" }}>{t("email")}:</span>
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
