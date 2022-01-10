import styled from "styled-components";

export const InternationalContainer = styled.div`
  background-color: #f2f2f2;

  .law_card {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin: 50px 0;

    .text {
      h2 {
        font-size: 44px;
        color: #02a89e;
      }
    }

    .image {
      width: 458px;
      height: 275px;
      background-image: url("/images/img1.png");
      position: relative;

      .text_positioning {
        position: absolute;
        top: 34px;
        left: 26px;
        width: 250px;
        height: 215px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;
