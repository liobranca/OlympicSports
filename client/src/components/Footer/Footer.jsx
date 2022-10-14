import React from 'react'
import styled from 'styled-components'
import Info from './FooterParts/Info';
import NewsLetters from './FooterParts/NewsLetters';
import Other from './FooterParts/Other';
import Policy from './FooterParts/Policy';

function Footer() {
  return (
    <FooterSection>
        <NewsLetters />
        <Info/>
        <Policy/>
        <Other/>
    </FooterSection>
  )
}

const FooterSection = styled.footer`
    margin-top: 3em;
    padding: 2em;
    background-color: #FBF8EE;
    display: grid;
    grid-gap: 2.5em;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
    text-transform: uppercase;
    font-size: clamp(0.7rem, 10vw, 0.9rem);
    font-weight: 300;
    max-width: 1000px;

    @media (min-width: 768px) {
      grid-template-columns: 2fr repeat(3, 1fr);
      margin-left: auto;
      margin-right: auto;
    }
  `;


export default Footer