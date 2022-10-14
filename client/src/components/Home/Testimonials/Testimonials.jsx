import React from "react";
import styled from "styled-components";

import testimonial from "../../../assets/icons/quote-mark.svg";

function Testimonials() {
  return (
    <TestimonialSection>
      <img src={testimonial} alt="" />
      <TestimonialItem>
        <h2>William Gibson</h2>
        <p>
          Good things come to those who wait – Olympic Sports is what has been
          missing in the modern fashion industry for years. Buy a shoe of high
          quality and design it finally happened.
        </p>
      </TestimonialItem>
    </TestimonialSection>
  );
}

const TestimonialSection = styled.section`
  margin-top: 4em;
  margin-bottom: 8em;
  padding-left: 1.5em;
  padding-right: 1.5em;
  position: relative;
  max-width: 1000px;

  img {
    max-width: 60px;
  }

  @media (min-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const TestimonialItem = styled.div`
  position: absolute;
  display: flex;
  padding: 1em;
  top: -10px;

  h2 {
    font-family: "Cyberthrone";
    font-size: clamp(0.5rem, 5vw, 3rem);
    display: inline;
    min-width: 30%;
    margin-top: 0.2em;
  }

  p {
    font-size: clamp(0.5rem, 5vw, 0.8rem);
    margin-left: 2em;
    line-height: 1em;
  }
  @media (min-width: 768px) {
    p {
      font-size: clamp(0.5rem, 5vw, 1.1rem);
    }
  }
`;

export default Testimonials;