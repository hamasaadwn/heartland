import styled from "styled-components";

export const Navbar = styled.div`
  /* background-color: ${({ bg }) => bg}; */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 3;

  .nav_container {
    max-width: 1920px;
    margin: auto;
    ul {
      list-style-type: none;
      margin-left: 10px;
      padding: 20px;
      overflow: hidden;
      display: flex;
      justify-content: center;

      li {
        /* float: left; */

        a {
          display: block;
          color: ${({ fg }) => fg};
          text-align: center;
          font-size: 20px;
          padding: 14px 36px;
          text-decoration: none;
          text-align: center;

          &:hover {
            color: #02a89e;
          }

          &.active {
            color: #02a89e;
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    position: relative;
    height: 60px;
    width: 100%;

    .hamburger {
      position: absolute;
      cursor: pointer;
      right: 5%;
      top: 50%;
      transform: translate(-5%, -50%);
      -webkit-transform: translate(-5%, -50%);
      z-index: 2;
      transition: all 0.5s linear;

      .line {
        transition: all 0.5s linear;

        &.open {
          margin: 9px;
          &.middle {
            /* transform: translateX(-50px); */
            background: transparent;
          }
          &.top {
            transform-origin: left;
            transform: rotate(45deg);
          }
          &.bottom {
            transform-origin: left;
            transform: rotate(-45deg);
          }
        }

        width: 30px;
        height: 2px;
        background-color: ${({ fg }) => fg};
        margin: 5px;
      }
    }

    ul {
      position: fixed;
      display: flex;
      flex-wrap: wrap;
      background-color: ${({ bg }) => bg};
      height: 100vh;
      width: 100vw;

      clip-path: circle(10px at 90% -10%);
      -webkit-clip-path: circle(10px at 90% -10%);

      transition: all 1s ease-out;
      &.open {
        clip-path: circle(1000px at 90% -10%);
        -webkit-clip-path: circle(1000px at 90% -10%);
      }

      li {
        width: 100%;
      }
    }
  }
`;
