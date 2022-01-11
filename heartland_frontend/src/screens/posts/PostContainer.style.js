import styled from "styled-components";

export const PostContainer = styled.div`
  width: 80%;
  margin: 20px auto;
  border: solid #cccccc 1px;
  border-radius: 10px;
  padding: 2px;

  .innerDiv {
    width: 100%;
    border: solid #cccccc 1px;
    border-radius: 10px;
    padding: 20px;
    text-align: center;

    h2 {
      font-size: 30px;
    }

    .image {
      max-width: 95%;
      max-height: 1000px;
      margin: auto;
      border-radius: 10px;
      overflow: hidden;

      img {
        width: 100%;
      }
    }

    p {
      max-width: 95%;
      margin: auto;
    }

    .downloadPdf {
      border: solid #cccccc 1px;
      border-radius: 10px;
      padding: 5px;
      max-width: 95%;
      margin: auto;

      a {
        color: black;
        text-decoration: none;
        font-size: 20px;

        p {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }

    .album {
      border: solid #cccccc 1px;
      border-radius: 10px;
      padding: 20px 5px;
      max-width: 95%;
      margin: auto;

      img {
        max-width: 95%;
        margin: 10px 5px;
      }
    }
  }
`;
