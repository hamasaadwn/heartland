import styled from "styled-components";

export const GuideContainer = styled.div`
  background-color: #000;

  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .about {
    color: #aa1829;
    font-size: 70px;
    width: 40%;
  }
  h1 {
    text-align: center;
    font-size: 70px;
  }
  .img {
    background-image: linear-gradient(
        to bottom,
        rgba(245, 246, 252, 0),
        rgba(0, 0, 0, 0.93)
      ),
      url("/images/useful.jpg");
    background-size: cover;
    height: 70vh;
    width: 60vw;
    overflow: hidden;
  }
  .paragraph {
    font-size: 23px;
    text-align: justify;
    color: #02a89e;
    width: 90vw;
  }
  @media screen and (max-width: 768px) {
    .about {
      font-size: 30px;
      text-align: left;
    }
    .img {
      height: 49vw;
      margin: 0.5vh auto;
      float: none;
      background-position: center;
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
