import styled from "styled-components";

export const HumanTrafficingContainer = styled.div`
  min-height: 100vh;
  .h1-text {
    background-image: url("/images/newbackground.jpg");
    background-size: cover;
    width: 100%;
    height: 100vh;
    margin-top: -120px;
    padding: 200px;
    color: white;
    padding: 90px;
    font-size: 50px;

    h1 {
      ${({ language }) =>
    language === "en"
      ? `
      border-left: solid 5px #aa1829;
      padding-left: 20px;
      `
      : language === "ar"
        ? `border-right: solid 5px #aa1829;
      padding-right: 20px;`
        : ""}

      margin-top: 100px;
    }
  }

  .ht_text {
    background-color: black;
    padding: 20px;
    border-radius: 20px;
    width: 90vw;
   
    margin: 100px auto;
    p {
      color: white;
      text-align: justify;
      font-size: 20px;
    }

    @media screen and (max-width: 768px) {
    width: 75vw;

    }
  }

  @media screen and (max-width: 768px) {
    .h1-text {
    padding: 30px;
      
      height: 50vh;
      font-size: 28px;
      line-height: 28px;
      /* margin: 0px 20px 70px 0; */

    }
    .ht_text{
    /* padding: 0px 20vw 0 0; */
    padding: 0 0;
     margin: 20px 0;

    }
  }
`;
