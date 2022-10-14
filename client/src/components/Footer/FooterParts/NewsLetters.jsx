import React from "react";
import styled from "styled-components";

import emailIcon from "../../../assets/icons/news-icon.svg"
import { Input } from "../../../common/Input";

function NewsLetters() {

    const submitHandler = (event) => {
        event.preventDefault();
      };

  return (
    <NewsLettersSection>
        <p>Subscribe to newsletter</p>
        <img src={emailIcon} alt=""></img>
        <form onSubmit={submitHandler}>
          <h4>Subscribe to our newsletter</h4>
          <Input
            type="email"
            name="email"
            ctaTitle="submit"
            placeholder="email address"
          />
        </form>
    </NewsLettersSection>
  )
}

const NewsLettersSection = styled.div`
  display: none;
  width: 100%;

  h4 {
    font-weight: 400;
  }

  img {
    width: 50px;
  }

  form {
    margin-top: 3.5em;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export default NewsLetters;
