import styled from "styled-components";

export const PostCard = styled.div`
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
    }

    .contentDiv {
      width: 70%;
    }
  }
`;
