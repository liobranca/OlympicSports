import React from "react";
import Marquee from "react-fast-marquee";
import styled from "styled-components";

function BarDivider() {
  return (
    <StyledScroll>
      <Marquee
        duration={70000}
        width="100%"
        height="30px"
        axis="x"
        align="center"
        pauseOnHover={false}
        reverse={true}
      >
        • OLYMPIC SPORTS • BEST OFFERS • OLYMPIC SPORTS • BEST OFFERS • OLYMPIC
        SPORTS SCROLL • BEST OFFERS • OLYMPIC SPORTS • BEST OFFERS • OLYMPIC
        SPORTS • BEST OFFERS • OLYMPIC SPORTS • BEST OFFERS • OLYMPIC SPORTS •
        BEST OFFERS • OLYMPIC SPORTS • BEST OFFERS • OLYMPIC SPORTS • DEPLACE SH
        OLYMPIC SPORTST SCROLL • BEST OFFERS • OLYMPIC SPORTS • BEST OFFERS •
        OLYMPIC SPORTS • BEST OFFERS • OLYMPIC SPORTS • BEST OFFERS • OLYMPIC
        SPORTS • BEST OFFERS • OLYMPIC SPORTS • BEST OFFERS
      </Marquee>
    </StyledScroll>
  );
}

const StyledScroll = styled.h4`
  font-weight: bold;
  margin-top: 2em;
  margin-bottom: 2em;
  padding-top: 1.5em;
  padding-bottom: 1.5em;

  border: 1px solid #141414;
  background: #ddc92a;

  @media screen and (max-width: 640px) {
    width: 105.7vw;
  }
`;

export default BarDivider;