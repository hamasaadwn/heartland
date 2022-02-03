import styled from "styled-components";

export const AboutContainer = styled.div`
  ${(props) => {
    console.log(props);
  }}
  background-color: #f2f2f2;
  height: 100vh;
  /* display: flex;
  flex-wrap: wrap;
  justify-content: space-around; */
  .about {
    color: #02a89e;
    font-size: 70px;
    text-align: center;

    padding: 0 5px;
    width: 45%;
  }
  .img {
    background-image: linear-gradient(
        to bottom,
        rgba(245, 246, 252, 0),
        rgba(242, 242, 242, 0.93)
      ),
      url(${({ img }) => img});
    background-size: cover;
    height: 600px;
    width: 1100px;
  }
  .paragraph {
    font-size: 25px;
    /* text-align: justify; */
    width: 100%;
    color: black;
  }
  @media screen and (max-width: 768px) {
    .about {
      font-size: 30px;
      text-align: center;

      padding: 0;
    }
    .img {
      height: 49vw;
      width: 90vw;
      margin: 25px auto;
      float: none;
    }
    .paragraph {
      font-size: 20px;
    }
  }
`;
