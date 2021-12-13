import styled from "styled-components";

export const ServiceContainer = styled.div`
  display: flex;

  .star-container {
    position: fixed;
    flex-direction: row-reverse;
    padding-left: 20px;
    top: 30vh;

    .star {
      color: transparent;
      transition: color 0.2s ease-in-out;
    }

    input[name="star"] {
      display: block;
      width: 0;
      opacity: 0;
      margin-left: -2px;
    }

    label {
      cursor: pointer;
    }

    svg {
      width: 3rem;
      height: 3rem;
      padding: 0.15rem;
    }

    label:hover ~ label .star,
    svg.star:hover,
    input[name="star"]:focus ~ label .star,
    input[name="star"]:checked ~ label .star {
      color: #02a89e;
    }

    input[name="star"]:checked + label .star {
      animation: starred 0.5s;
    }

    input[name="star"]:checked + label {
      animation: scaleup 1s;
    }

    @keyframes scaleup {
      from {
        transform: scale(1.2);
      }
      to {
        transform: scale(1);
      }
    }

    @keyframes starred {
      from {
        color: #02a89e;
      }
      to {
        color: #02a89e;
      }
    }
  }

  .map-image {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .star-source {
    width: 0;
    height: 0;
    visibility: hidden;
  }
`;
