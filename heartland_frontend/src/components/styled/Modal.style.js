import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000000b3;
  display: flex;
  justify-content: center;
  align-items: center;

  .modal {
    background-color: #f3f3f3;
    width: 50%;
    padding: 20px;
    border-radius: 5px;
    position: relative;

    @media screen and (max-width: 768px) {
      width: 90%;
    }

    .style-fa-times {
      cursor: pointer;
      float: right;
    }
  }
`;
