import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

import {
  changeBackgroundToBlack,
  changeNavbar,
} from "../../actions/rootActions";
import { Container } from "../../components/styled/Container.style";
import { ContactUsContainer } from "./ContactUs.styles";
import { loadContact } from "../../actions/contactActions";

const ContactUs = () => {
  const dispatch = useDispatch();

  const { visitor } = useSelector((state) => state.root);
  const { contacts } = useSelector((state) => state.contacts);

  const { t } = useTranslation();

  useEffect(() => {
    dispatch(changeBackgroundToBlack());
    dispatch(changeNavbar("black"));
    dispatch(loadContact());
  }, []);

  return (
    <Container>
      <ContactUsContainer>
        <div className="headtext">
          <h2>{t("visitors")}</h2>
          <p>{visitor}</p>
        </div>
        <hr />
        <div className="star-container">
          <input type="radio" name="star" id="five" />
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
          </svg>
        </div>
        <hr />
        <div className="contact-info">
          <p>{t("phone")} &#160; +0964 000 000 0000</p>
          <p>{t("email")} &#160; email@gmail.com</p>
          <div className="social-icons">
            <p>{t("social_media")} &#160;</p>
            <FontAwesomeIcon icon={faFacebookSquare} className="fa-b-styles" />
            <FontAwesomeIcon icon={faFacebookSquare} className="fa-b-styles" />
            <FontAwesomeIcon icon={faFacebookSquare} className="fa-b-styles" />
          </div>
        </div>
      </ContactUsContainer>
    </Container>
  );
};

export default ContactUs;
