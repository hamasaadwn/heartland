import styled from "styled-components";

const MapsCardsStyles = styled.div`
  width: 446px;
  height: 432px;
  background-image: url(${({ img }) => img});
  background-size: cover;
  position: relative;
  margin: 0 20px;

  h3 {
    position: absolute;
    bottom: 120px;
    left: 120px;
    font-size: 2em;
    color: black;
  }
  @media screen and (max-width: 768px) {
    width: 336px;
    height: 325px;

    h3 {
      font-size: 1.5em;
      left: 90px;
      bottom: 90px;
    }
  }
`;

export default MapsCardsStyles;
