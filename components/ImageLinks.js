import React from 'react';
import styled from 'styled-components';
import ImageLink from './ImageLink'

import crab from "../public/img/small/crab.jpg";
import purslane from "../public/img/small/purslane.jpg";
import seascape from "../public/img/small/seascape.jpg";
import oysters from "../public/img/small/oysters.jpg";

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
      <ImageLink link="https://store.lisa-alley.com" color={props => props.theme.teal} image={oysters}>Store</ImageLink>
      <ImageLink color={props => props.theme.red} image={purslane}><a href="mailto:lisadianealley@gmail.com">Email</a> | <a target="_blank" href="http://instagram.com/lalley">Instagram</a></ImageLink>
    </ImageLinksStyles>
  )
};

export default ImageLinks