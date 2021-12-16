import styled from "styled-components";

export const AboutContainer = styled.div`
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
    background-image: linear-gradient(
        to bottom,
        rgba(245, 246, 252, 0),
        rgba(242, 242, 242, 0.93)
      ),
      url("/images/myimage.jpg");
    background-size: cover;
    height: 600px;
    width: 1100px;
  }

  .paragraph {
    font-size: 23px;
    text-align: justify;
    width: 90vw;
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

      text-align: justify;
    }
  }
`;
