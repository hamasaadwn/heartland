import styled from "styled-components";

export const PostCard = styled.div`
  width: 80%;
  margin: 20px auto;
  border: solid #cccccc 1px;
  border-radius: 10px;
  padding: 2px;

  a {
    color: #595959;
    text-decoration: none;
  }

  .innerDiv {
    width: 100%;
    border: solid #cccccc 1px;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .image {
      width: 25%;
      border-radius: 10px;
      overflow: hidden;
      height: 200px;
      position: relative;

      img {
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      @media only screen and (max-width: 775px) {
        height: 150px;
      }
      @media only screen and (max-width: 500px) {
        height: 100px;
      }
    }

    .contentDiv {
      width: 70%;
    }
  }
`;
