import styled from "styled-components";

export const EmergencyContainer = styled.div`
  max-width: 1100px;
  margin: auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
    justify-content: center;
  }
`;
