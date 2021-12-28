import styled from "styled-components";

export const Sidebar = styled.div`
  position: fixed;
  width: 250px;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: #e3e3e3;
  -webkit-box-shadow: 4px 0px 15px 0px rgba(0, 0, 0, 0.37);
  box-shadow: 4px 0px 15px 0px rgba(0, 0, 0, 0.37);

  ul {
    list-style-type: none;

    li {
      width: 100%;
      a {
        font-size: 24px;
        text-decoration: none;
        color: black;
        width: 100%;
        height: 100%;
        display: block;
        padding: 20px 20px;

        &:hover {
          box-shadow: inset 0 0 10px #b3b3b3;
        }

        &.active {
          box-shadow: inset 0 0 10px #b3b3b3;
        }
      }
    }
  }
`;
