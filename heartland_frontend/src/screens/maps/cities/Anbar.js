import React, { useEffect } from "react";

import { useDispatch } from "react-redux";

import { changeBackgroundToWhite } from "../../../actions/rootActions";
import { Container } from "../../../components/styled/Container.style";
import { LittleBox } from "../../../components/styled/LittleBox.styles";

import { CityContainer } from "./City.styles";

const Anbar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeBackgroundToWhite());
  }, []);

  return (
    <Container>
      <CityContainer>
        <div class="h1-t">
          <h1>Al-anbar</h1>
        </div>
        <div class="img-map">
          <img src="/images/img-map1-01.png" alt="" />
          <img src="/images/img-map2-01.png" alt="" />
          <img src="/images/img-map3-01.png" alt="" />
        </div>
        <div className="detail-container">
          {" "}
          <div class="map-detail">
            <p>
              <LittleBox bg="#00a79b"></LittleBox>
              <span style={{ color: "#02a89e" }}>L: al anbar </span>
              <span style={{ color: "#02a89e" }}> - street - house </span>
              <span style={{ color: "#02a89e" }}> P.number: </span> 000 000 0000{" "}
              <span style={{ color: "#02a89e" }}>E:</span>
              Heartlandalliance@gmail.com
            </p>
            <br />
            <p>
              <LittleBox bg="#0071ba"></LittleBox>
              <span style={{ color: "#02a89e" }}>L: al anbar</span>
              <span style={{ color: "#02a89e" }}> - street - house</span>
              <span style={{ color: "#02a89e" }}>P.number:</span> 000 000 0000{" "}
              <span style={{ color: "#02a89e" }}>E:</span>
              Heartlandalliance@gmail.com
            </p>
            <br />
            <p>
              <LittleBox bg="#0000ff"></LittleBox>
              <span style={{ color: "#02a89e" }}>L: al anbar</span>
              <span style={{ color: "#02a89e" }}> - street - house </span>
              <span style={{ color: "#02a89e" }}>P.number:</span> 000 000 0000{" "}
              <span style={{ color: "#02a89e" }}>E:</span>
              Heartlandalliance@gmail.com
            </p>
            <br />
            <p>
              <LittleBox bg="#2e3190"></LittleBox>
              <div class="cont4"></div>
              <span style={{ color: "#02a89e" }}>L: al anbar</span>
              <span style={{ color: "#02a89e" }}> - street - house</span>
              {}
              <span style={{ color: "#02a89e" }}>P.number:</span> 000 000 0000{" "}
              <span style={{ color: "#02a89e" }}>E:</span>
              Heartlandalliance@gmail.com
            </p>
          </div>
        </div>
        <div class="star-container">
          <input type="radio" name="star" id="five" />
          <label for="five">
            <svg class="star">
              <use xlinkHref="#star" />
            </svg>
          </label>
          <input type="radio" name="star" id="four" />
          <label for="four">
            <svg class="star">
              <use xlinkHref="#star" />
            </svg>
          </label>
          <input type="radio" name="star" id="three" />
          <label for="three">
            <svg class="star">
              <use xlinkHref="#star" />
            </svg>
          </label>
          <input type="radio" name="star" id="two" />
          <label for="two">
            <svg class="star">
              <use xlinkHref="#star" />
            </svg>
          </label>
          <input type="radio" name="star" id="one" />
          <label for="one">
            <svg class="star">
              <use xlinkHref="#star" />
            </svg>
          </label>
        </div>
        <div class="star-source">
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
