import styled from "styled-components";

export const HugeSuccessContainer = styled.div`
  position: fixed;
  top: 100vh;
  left: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80vh;
  transition: transform 1s;

  &.showSuccess {
    top: 0;
    left: 0;
  }

  .content {
    width: 733px;
    height: 416px;
    background-image: url("/images/img-success-01.png");
    background-size: contain;
    position: relative;

    .text {
      position: absolute;
      top: 225px;
      left: 100px;
      font-size: 60px;
      color: white;
    }

    @media only screen and (max-width: 768px) {
      width: 366px;
      height: 208px;

      .text {
        top: 112px;
        left: 50px;
        font-size: 30px;
      }
    }
  }
`;
