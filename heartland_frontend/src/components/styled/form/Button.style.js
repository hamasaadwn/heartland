import styled from "styled-components";

export const Button = styled.button`
  padding: 5px;
  font-size: 25px;
  width: 100%;
  background-color: ${({ bg }) => bg};
  color: ${({ fg }) => fg};
  border: none;
  border-bottom: solid 3px ${({ fg }) => fg};
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:focus {
    border-bottom-color: ${({ bg }) => bg};
  }
`;
