import React from 'react';
import styled from 'styled-components';
import ImageLink from './ImageLink'

import crab from "../public/img/crab.jpg";
import purslane from "../public/img/purslane.jpg";
import seascape from "../public/img/seascape.jpg";
import oysters from "../public/img/oysters.jpg";

const ImageLinksStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  z-index: 3;
`;

function ImageLinks() {
  return(
    <ImageLinksStyles id="links">
      <ImageLink link="#commissions"color={props => props.theme.lavender} image={crab}>Commissions</ImageLink>
      <ImageLink link="#gallery" color={props => props.theme.yellow} image={seascape}>Gallery</ImageLink>
      <ImageLink color={props => props.theme.red} image={purslane}>Contact</ImageLink>
      <ImageLink link="https://store.lisa-alley.com" color={props => props.theme.teal} image={oysters}>Store</ImageLink>
    </ImageLinksStyles>
  )
};

export default ImageLinks