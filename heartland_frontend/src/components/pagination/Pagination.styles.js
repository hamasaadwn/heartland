import styled from "styled-components";

export const PaginationNav = styled.nav`
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
  ul {
    li {
      display: inline;
      font-size: 20px;
      padding: 0 6px;
      border: 1px black solid;
      margin: 1px;
      border-radius: 3px;

      &.active {
        background-color: black;
        a {
          color: white;
        }
      }

      a {
        color: black;
        text-decoration: none;
      }
    }
  }
`;
