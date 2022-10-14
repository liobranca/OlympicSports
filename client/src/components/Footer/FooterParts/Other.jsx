import React from "react";
import styled from "styled-components";

import circleContainerIcon from "../../../assets/icons/circle-container.svg";
import arrowIcon from "../../../assets/icons/arrow.svg";
import facebook from "../../../assets/icons/facebook.svg";
import instagram from "../../../assets/icons/instagram.svg";

function Other() {
  return (
    <OtherSection>
      <Icon>
        <img src={circleContainerIcon} alt=""></img>
        <img src={arrowIcon} alt=""></img>
      </Icon>
      <Social>
        <img src={facebook} alt="facebook page" />
        <a href="https://www.instagram.com/olympicsports833/" alt="" target="_blank" ><img src={instagram} alt="instagram page" /></a>
      </Social>
    </OtherSection>
  );
}

const OtherSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const Icon = styled.a`
  position: relative;

  &:hover {
    cursor: pointer;
  }

  img {
    width: 3.5rem;
    transform: rotate(-90deg);
  }

  img:first-child {
    position: absolute;
    right: 0;
  }

  img:last-child {
    padding: 0.6em;
  }
`;

//
// Social
//
const Social = styled.div`
  display: flex;
  img {
    width: 24px;
  }

  img:hover {
    cursor: pointer;
  }

  img + img {
    margin-left: 0.5em;
  }
`;

export default Other;
