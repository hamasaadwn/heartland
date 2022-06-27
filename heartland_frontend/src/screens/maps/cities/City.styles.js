import styled from "styled-components";

export const CityContainer = styled.div`
  .h1-t {
    font-size: 30px;
    padding-left: 30px;
  }

  .img-map {
    text-align: center;

    img {
      width: 500px;

      @media screen and (max-width: 768px) {
        width: 300px;
      }
    }
  }

  .detail-container {
    display: flex;
    align-items: center;
  }

  .map-detail {
    /* width: 1000px; */
    margin: 0 auto;
    font-size: 1.3vmax;
  }

  .star-container-self {
    margin: 30px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
