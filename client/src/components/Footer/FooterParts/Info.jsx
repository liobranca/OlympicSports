import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"

function Info() {
  return (
    <InfoSection>
      <div>
        <p>Info</p>
        <ul>
          <li>
            <Link to="/faq">Faq</Link>
          </li>
          <li>
            <Link to="/returns">Returns</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <SecondaryLink>
        <Link to="/credits">Credits</Link>
      </SecondaryLink>
    </InfoSection>
  );
}

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ul {
    margin-top: 0.4em;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #141414;
    font-size: 1.3rem;
  }

  div:last-child {
    margin-top: 5em;
  }
`;

const SecondaryLink = styled.div`
  a {
    font-size: 0.9rem;
  }
`;

export default Info;
