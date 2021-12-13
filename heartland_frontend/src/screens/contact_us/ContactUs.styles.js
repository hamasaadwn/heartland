import styled from "styled-components";

export const ContactUsContainer = styled.div`
  .headtext {
    padding: 100px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    h2 {
      color: #fff;
      font-size: 140px;
    }

    p {
      color: #02a89e;
      font-size: 60px;
    }
  }

  hr {
    color: white;
  }

  .contact-info {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    padding: 100px;
    color: white;

    .fa-b-styles {
      color: #02a89e;
      font-size: 44px;
    }
  }

  //////star
  label {
    cursor: pointer;
  }

  svg {
    width: 3rem;
    height: 3rem;
    padding: 0.15rem;
  }

  /* hide radio buttons */

  input[name="star"] {
    display: inline-block;
    width: 0;
    opacity: 0;
    margin-left: -2px;
  }

  /* hide source svg */

  .star-source {
    width: 0;
    height: 0;
    visibility: hidden;
  }

  /* set initial color to transparent so fill is empty*/

  .star {
    color: transparent;
    transition: color 0.2s ease-in-out;
    margin: 40px;
  }

  /* set direction to row-reverse so 5th star is at the end and ~ can be used to fill all sibling stars that precede last starred element*/

  .star-container {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
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
`;
