import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 99vw;
  height: 99vh;
  background-image: url("/images/HEARTLAND  ALLIANCE-16.jpg");
  background-size: cover;
  position: relative;

  .circle {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("/images/sdfsd-01.png");
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-wrap: wrap;

    .menu {
      width: 25%;
      height: 50%;
      border: 5px solid black;
      transition: 0.3s;

      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
        -webkit-backdrop-filter: blur(2px);
        backdrop-filter: blur(2px);
        border-width: 0;
        overflow: hidden;
      }

      .main_menu_link {
        width: 100%;
        height: 100%;
        display: block;
        text-align: center;
        text-decoration: none;
        color: white;
        font-size: 32px;
      }

      .main_menu_link_top {
        padding-top: 10%;
      }

      .main_menu_link_bottom {
        padding-top: 80%;
      }

      .main_menu_link_active {
        color: #02a89e;
        font-size: 36px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    background-position: -550px 0;
    height: 92vh;

    .circle {
      .menu {
        width: 50%;
        height: 25%;

        .main_menu_link_bottom {
          padding-top: 10%;
        }

        .main_menu_link {
          font-size: 22px;
        }
      }
    }
  }
`;

export const SideMenuContainer = styled.div`
  width: 100vh;
  height: 60px;
  position: fixed;
  z-index: 2;
  background-color: white;
  transform-origin: left top;
  transform: rotate(-90deg) translateX(-100%);
  -webkit-transform-origin: left top;
  -webkit-transform: rotate(-90deg) translateX(-100%);
  display: flex;
  justify-content: space-around;

  h1 {
    height: 100%;
    line-height: 60px;
  }

  .style-fa-search {
    font-size: 64px;
    padding-top: 28px;
    transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
  }

  @media only screen and (max-width: 768px) {
    width: 100vw;
    height: 60px;
    z-index: 2;
    transform-origin: left top;
    transform: rotate(0deg) translateX(-0%);
    -webkit-transform: rotate(0deg) translateX(-0%);

    h1 {
      height: 100%;
      line-height: 60px;
      font-size: 10px;
    }

    .style-fa-search {
      font-size: 42px;
      padding-top: 16px;
      transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
    }
  }
`;

export const CreateMargin = styled.div`
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 60px;
  }
`;
