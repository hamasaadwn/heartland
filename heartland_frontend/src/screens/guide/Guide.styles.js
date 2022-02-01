import styled from "styled-components";

export const GuideContainer = styled.div`
  background-color: #000;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  .about {
    margin-left: 50px;

    h1 {
      color: #aa1829;
      font-size: 70px;
    }
    p {
      color: #02a89e;
      font-size: 30px;

      a {
        color: #02a89e;
        text-decoration: none;
      }
    }
  }

  .img {
    background-image: linear-gradient(
        to left,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 1)
      ),
      url("/images/myimage.jpg");
     background-size: cover;
    height: 40vmax;
    width: 60vmax;
    overflow: hidden;
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
      text-align: center;
      margin:0 auto
    }
    .about h1{
      font-size: 40px;
    }

    .img {
      height: 49vw;
      width: 90vw;
      margin: 5px auto;
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
