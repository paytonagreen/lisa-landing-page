import React from 'react';
import styled from 'styled-components';
import ImageLink from './ImageLink'

import crab from "../public/img/small/crab-link.jpg";
import purslane from "../public/img/small/purslane-link.jpg";
import seascape from "../public/img/small/seascape-link.jpg";
import oysters from "../public/img/small/oysters-link.jpg";

const ImageLinksStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  z-index: 3;
  @media(max-width: 700px) {
    grid-template-columns: 1fr;
    grid-gap: 0;
  }
`;

function ImageLinks() {
  return(
    <ImageLinksStyles id="links">
      <ImageLink link="#commissions"color={props => props.theme.lavender} image={crab}>Commissions</ImageLink>
      <ImageLink link="#gallery" color={props => props.theme.lavender} image={seascape}>Gallery</ImageLink>
      <ImageLink link="https://store.lisa-alley.com" color={props => props.theme.lavender} image={oysters}>Store</ImageLink>
      <ImageLink link="#contact" color={props => props.theme.lavender} image={purslane}>Contact</ImageLink>
    </ImageLinksStyles>
  )
};

export default ImageLinks