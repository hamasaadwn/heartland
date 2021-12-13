import styled from "styled-components";

export const AssessmentFormContainer = styled.div`
  background-color: #f2f2f2;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  .about {
    color: #02a89e;
    font-size: 70px;
    margin-left: 50px;
  }

  .img {
    background-image: url("/images/guid-01.png");
    background-size: cover;
    height: 600px;
    width: 700px;
    margin: 50px;
    float: right;
    position: relative;
  }

  .paragraph {
    font-size: 23px;
    padding-left: 40px;
    text-align: justify;
  }

  @media screen and (max-width: 768px) {
    .about {
      font-size: 30px;
      text-align: left;
    }

    .img {
      height: 49vw;
      width: 90vw;
      margin: 25px auto;
      float: none;
    }

    .paragraph {
      font-size: 18px;
      padding: 0;
      margin: auto;
      width: 90vw;
      text-align: justify;
    }
  }
`;
