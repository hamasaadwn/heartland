import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Container } from "../../components/styled/Container.style";
import { changeBackgroundToWhite } from "../../actions/rootActions";

import { InternationalContainer } from "./International.styles";

const International = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeBackgroundToWhite());
  }, []);

  return (
    <Container>
      <InternationalContainer>
        <div className="law_card">
          <div className="text">
            <h2>
              International
              <br />
              Working Law
            </h2>
          </div>
          <div className="image">
            <div className="text_positioning">
              <h2>international</h2>
            </div>
          </div>
        </div>
        <div className="law_card">
          <div className="text">
            <h2>
              Iraq
              <br />
              Working law
            </h2>
          </div>
          <div className="image">
            <div className="text_positioning">
              <h2>iraq</h2>
            </div>
          </div>
        </div>
      </InternationalContainer>
    </Container>
  );
};

export default International;
