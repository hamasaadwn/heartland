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
`;

export default MapsCardsStyles;
