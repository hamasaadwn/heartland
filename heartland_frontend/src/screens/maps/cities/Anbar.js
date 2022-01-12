import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { loadMapByCity } from "../../../actions/mapsActions";

import {
  changeBackgroundToWhite,
  changeNavbar,
} from "../../../actions/rootActions";
import { Container } from "../../../components/styled/Container.style";
import { LittleBox } from "../../../components/styled/LittleBox.styles";

import { CityContainer } from "./City.styles";

const Anbar = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const city = params.city;

  const { map } = useSelector((state) => state.map);

  useEffect(() => {
    dispatch(changeBackgroundToWhite());
    dispatch(changeNavbar("white"));
    dispatch(loadMapByCity(city));
  }, []);

  return (
    <Container>
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
              map.branch.map((b) => (
                <p>
                  <LittleBox bg="#00a79b"></LittleBox>
                  <span style={{ color: "#02a89e" }}>name: {b.address}</span>
                  <span style={{ color: "#02a89e" }}> P.number: </span>{" "}
                  {b.phone} {"  "}
                  <span style={{ color: "#02a89e" }}>E:</span>
                  {b.email}
                  <br />
                </p>
              ))}
          </div>
        </div>
        <div className="star-container">
          <input type="radio" name="star" id="five" />
          <label for="five">
            <svg className="star">
              <use xlinkHref="#star" />
            </svg>
          </label>
          <input type="radio" name="star" id="four" />
          <label for="four">
            <svg className="star">
              <use xlinkHref="#star" />
            </svg>
          </label>
          <input type="radio" name="star" id="three" />
          <label for="three">
            <svg className="star">
              <use xlinkHref="#star" />
            </svg>
          </label>
          <input type="radio" name="star" id="two" />
          <label for="two">
            <svg className="star">
              <use xlinkHref="#star" />
            </svg>
          </label>
          <input type="radio" name="star" id="one" />
          <label for="one">
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
              <stop stop-color="#02a89e" offset="0%"></stop>
              <stop stop-color="#02a89e" offset="60%"></stop>
              <stop stop-color="#02a89e" offset="100%"></stop>
            </linearGradient>
            <symbol id="star" viewBox="153 89 106 108">
              <polygon
                id="star-shape"
                stroke="url(#grad)"
                stroke-width="5"
                fill="currentColor"
                points="206 162.5 176.610737 185.45085 189.356511 150.407797 158.447174 129.54915 195.713758 130.842203 206 95 216.286242 130.842203 253.552826 129.54915 222.643489 150.407797 235.389263 185.45085"
              ></polygon>
            </symbol>
          </svg>
        </div>
      </CityContainer>
    </Container>
  );
};

export default Anbar;
