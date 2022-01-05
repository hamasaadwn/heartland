import styled from "styled-components";

export const Border = styled.div`
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  padding: 10px;
  margin: 20px;

  div {
    div {
      display: flex;
      label {
        width: 25%;
      }

      input {
        width: 75%;
      }
    }
  }
`;
