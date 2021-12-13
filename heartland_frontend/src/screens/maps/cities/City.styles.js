import styled from "styled-components";

export const CityContainer = styled.div`
  .h1-t {
    font-size: 30px;
    padding-left: 30px;
  }

  .img-map {
    text-align: center;
  }

  .detail-container {
    display: flex;
    align-items: center;
  }

  .map-detail {
    /* width: 1000px; */
    margin: 0 auto;
  }

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
