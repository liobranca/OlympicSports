import React from "react";
import styled from "styled-components";

import {Link} from "react-router-dom"

function Policy() {
  return (
    <PolicySection>
        <div>
        <p>Policy</p>
        <ul>
          <li>
            <Link to="/terms">Terms</Link>
          </li>
          <li>
            <Link to="/privacy">Privacy</Link>
          </li>
          <li>
            <Link to="/cookie">Cookie</Link>
          </li>
        </ul>
      </div>
      <div>&copy; 2022 OLYMPIC SPORTS</div>
    </PolicySection>
  )
}

const PolicySection = styled.div`
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
`;

export default Policy;
