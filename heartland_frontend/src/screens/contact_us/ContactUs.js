import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import StarRatings from "react-star-ratings";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
  faTwitterSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";

import {
  changeBackgroundToBlack,
  changeNavbar,
} from "../../actions/rootActions";
import { Container } from "../../components/styled/Container.style";
import { ContactUsContainer } from "./ContactUs.styles";
import { loadContactList } from "../../actions/contactActions";
import { getRatings } from "../../actions/ratingActions";

const ContactUs = () => {
  const dispatch = useDispatch();

  const { visitor } = useSelector((state) => state.root);
  const { contacts } = useSelector((state) => state.contactList);
  const { rating } = useSelector((state) => state.rating);

  const { t } = useTranslation();

  useEffect(() => {
    dispatch(changeBackgroundToBlack());
    dispatch(changeNavbar("black"));
    dispatch(loadContactList());
    dispatch(getRatings());
    console.log(rating);
  }, [dispatch]);
  return (
    <Container>
      <ContactUsContainer>
        <div className="headtext">
          <h2>{t("visitors")}</h2>
          <p>{visitor}</p>
        </div>
        <hr />
        <br />
        <div className="star-container">
          {rating && rating.avgWebsite && (
            <StarRatings
              rating={rating.avgWebsite}
              starRatedColor="#02a89e"
              starHoverColor="#02a89e"
              starEmptyColor="#002926"
            />
          )}
        </div>
        <br />

        <hr />
        <div className="contact-info">
          <div>
            {t("phone")} &#160;
            {contacts && contacts.nums.map((p) => <p key={p._id}>{p.value}</p>)}
          </div>
          <div>
            {t("email")} &#160;
            {contacts &&
              contacts.emails.map((p) => <p key={p._id}>{p.value}</p>)}
          </div>
          <div className="social-icons">
            <p>{t("social_media")} &#160;</p>
            {contacts &&
              contacts.sm.map((p) => {
                if (p.type === "facebook") {
                  return (
                    <a href={p.value} key={p._id}>
                      <FontAwesomeIcon
                        icon={faFacebookSquare}
                        className="fa-b-styles"
                      />
                    </a>
                  );
                } else if (p.type === "twitter") {
                  return (
                    <a href={p.value} key={p._id}>
                      <FontAwesomeIcon
                        icon={faTwitterSquare}
                        className="fa-b-styles"
                      />
                    </a>
                  );
                } else if (p.type === "instagram") {
                  return (
                    <a href={p.value} key={p._id}>
                      <FontAwesomeIcon
                        icon={faInstagramSquare}
                        className="fa-b-styles"
                      />
                    </a>
                  );
                } else if (p.type === "youtube") {
                  return (
                    <a href={p.value} key={p._id}>
                      <FontAwesomeIcon
                        icon={faYoutubeSquare}
                        className="fa-b-styles"
                      />
                    </a>
                  );
                } else if (p.type === "linkedin") {
                  return (
                    <a href={p.value} key={p._id}>
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        className="fa-b-styles"
                      />
                    </a>
                  );
                }
              })}
          </div>
        </div>
      </ContactUsContainer>
    </Container>
  );
};

export default ContactUs;
