import styled from "styled-components";

export const IconButton = styled.button`
  background-color: ${({ bg }) => bg};
  color: ${({ fg }) => fg};
  border-radius: 5px;
  border: 1px solid
    ${({ fg }) => {
      return fg + "50";
    }};
  padding: 4px;
  margin: 0 4px;
  font-size: 16px;
`;
