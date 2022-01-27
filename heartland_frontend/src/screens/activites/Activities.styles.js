import styled from "styled-components";

export const ActivitesContainer = styled.div`
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
  h2{
    text-align: center;
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
    width: 900px;
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
