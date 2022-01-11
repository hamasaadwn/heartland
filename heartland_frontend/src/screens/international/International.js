import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { Container } from "../../components/styled/Container.style";
import {
  changeBackgroundToWhite,
  changeNavbar,
} from "../../actions/rootActions";

import { InternationalContainer } from "./International.styles";

const International = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeBackgroundToWhite());
    dispatch(changeNavbar("white"));
  }, []);

  return (
    <Container>
      <InternationalContainer>
        <div className="law_card">
          <Link to="/posts/Iraq">
            <div className="text">
              <h2>
                Iraq
                <br />
                Working law
              </h2>
            </div>
          </Link>
          <Link to="/posts/Iraq">
            <div className="image">
              <div className="text_positioning">
                <h2>iraq</h2>
              </div>
            </div>
          </Link>
        </div>
        <div className="law_card">
          <Link to="/posts/International">
            <div className="text">
              <h2>
                International
                <br />
                Working Law
              </h2>
            </div>
          </Link>
          <Link to="/posts/International">
            <div className="image">
              <div className="text_positioning">
                <h2>international</h2>
              </div>
            </div>
          </Link>
        </div>
      </InternationalContainer>
    </Container>
  );
};

export default International;
