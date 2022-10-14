import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  padding-left: 1.5em;
  padding-right: 1.5em;
  margin-top: 15em;
  margin-bottom: 8em;
  max-width: 1024px;

  @media (min-width: 1000px) {
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (max-width: 1024px) {
    padding-left: 1.5em;
    padding-right: 1.5em;
    margin-top: 15em;
    margin-bottom: 8em;
    max-width: 768px;
  }
`;

export const ProductDetails = styled.section`
  position: relative;

  h1,
  h4,
  h3 {
    text-transform: uppercase;
  }
`;

export const ProductTitle = styled(motion.div)`
  h1 {
    font-weight: 500;
    font-size: 10rem;
    line-height: 0.8em;
    font-family: "TTrailer";
    letter-spacing: -5px;

    @media screen and (max-width: 1024px) {
      font-size: 7rem;
    }
  }

  h4 {
    font-weight: 400;
    font-size: 1.5rem;
  }
`;

export const ProductPriceInfo = styled.div`
  text-align: end;
  text-transform: uppercase;

  p {
    text-decoration: line-through;
  }

  h3 {
    font-size: 2rem;
    font-weight: 500;
  }
`;

export const ProductOtherInfo = styled.section`
  margin-top: 10em;
  margin-bottom: 5em;
  position: relative;

  img {
    margin-top: 3em;
  }
`;

export const ProductOtherInfoTitle = styled.h1`
  font-family: "Favorit";
  font-size: 5.5rem;
  font-weight: 400;
  letter-spacing: -10px;
  line-height: 0.8em;
  position: absolute;
  top: -80px;
`;

export const ProductImage = styled.div`
  img {
    border: 2px solid #141414;
  }
  p {
    text-transform: uppercase;
    width: 100%;
  }

  div:last-child {
    display: flex;
    justify-content: space-between;
  }
`;

export const ProductDescription = styled.p`
  margin: 1em 0;
  font-size: 1.5rem;
  line-height: 1.2em;
`;

export const ProductShippingInfo = styled.div`
  margin: 2em 0;
  font-size: 1.5rem;
  line-height: 1.2em;
`;

export const AddToCartButton = styled(motion.div)`
  position: sticky;
  bottom: 0.6em;
  left: 0px;
  padding: 1.5em;
  background-color: #141414;

  a {
    color: #fcf9ee;
    text-transform: uppercase;
    text-align: center;
    display: block;
    font-size: 1.3rem;
  }

  a:hover {
    text-decoration: none;
  }
`;
