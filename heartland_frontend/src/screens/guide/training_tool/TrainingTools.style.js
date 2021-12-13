import styled from "styled-components";

export const TrainingToolsContainer = styled.div`
  background-color: #000;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .about {
    color: #02a89e;
    font-size: 70px;
    margin-left: 10px;
    width: 10%;
  }

  .img {
    background-image: linear-gradient(
        to bottom,
        rgba(245, 246, 252, 0),
        rgba(0, 0, 0, 0.93)
      ),
      url("/images/myimage.jpg");
    background-size: cover;
    height: 600px;
    width: 1100px;
  }

  .paragraph {
    font-size: 23px;
    padding-left: 40px;
    text-align: justify;
    color: #02a89e;
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
