import styled from "styled-components";

export const FlexRow = styled.div`

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;


 @media screen and (max-width: 900px) {
      flex-direction: column;

  }
`;
