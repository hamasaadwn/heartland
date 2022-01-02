import styled from "styled-components";

export const Input = styled.input`
  padding: 5px;
  font-size: 25px;
  width: 100%;
  background-color: ${({ bg }) => bg};
  color: ${({ fg }) => fg};
  caret-color: ${({ fg }) => fg};
  border: none;
  border-bottom: solid 3px ${({ fg }) => fg};
  border-radius: 5px;
  transition: all 0.5s ease-in-out;

  ::placeholder {
    color: ${({ fg }) => fg};
    transition: all 0.5s ease-in-out;
  }

  &:focus {
    outline: none;
    color: #02a89e;
    border-bottom-color: #02a89e;
    caret-color: #02a89e;
    ::placeholder {
      color: #02a89e80;
    }
  }

  &:invalid {
    color: #a30054;
    border-bottom-color: #a30054;
    caret-color: #a30054;
  }

  &.error {
    color: #a30054;
    border-bottom-color: #a30054;
    caret-color: #a30054;
  }
`;
