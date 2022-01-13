import styled from "styled-components";

export const ServiceContainer = styled.div`
  display: flex;

  .star-container-self {
    position: fixed;
    padding-left: 200px;
    top: 30vh;
    z-index: 2;
    display: flex;
    flex-direction: row;
    /* transform-origin: top right;
    transform: rotate(45deg); */

    @media screen and (max-width: 768px) {
      right: 20px;
    }
  }

  .map-image {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .star-source {
    width: 0;
    height: 0;
    visibility: hidden;
  }
`;
