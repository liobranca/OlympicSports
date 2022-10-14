import React from "react";

import ImgPortada from "./ImgPortada";
import Btn from "../../../common/Btn";
import {
  StyledCategorySection,
  StyledCollections,
  StyledHeading,
  StyledSubHeading,
  Wrapper,
} from "./styledComponents";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Collections() {
  return (
    <Wrapper>
      <StyledCollections>
        <StyledHeading>
          <h1>
            <span>OLYMPIC,</span>
          </h1>
          <StyledSubHeading>
            <h1>
              <span>SPORTS</span>
            </h1>
            <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              COLL.
              <br />
              2022
            </motion.h3>
          </StyledSubHeading>
        </StyledHeading>
        <StyledCategorySection>
          <ImgPortada />
        </StyledCategorySection>
        <Link to="/search">
          <Btn title="EXPLORE" />
        </Link>
      </StyledCollections>
    </Wrapper>
  );
}

export default Collections;
