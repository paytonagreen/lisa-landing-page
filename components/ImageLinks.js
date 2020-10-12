import React from 'react';
import ImageLinksStyles from './styles/ImageLinksStyles'
import ImageLink from './ImageLink'

import crab from "../public/img/small/crab-link.jpg";
import purslane from "../public/img/small/purslane-link.jpg";
import seascape from "../public/img/small/seascape-link.jpg";
import oysters from "../public/img/small/oysters-link.jpg";



function ImageLinks() {
  return(
    <ImageLinksStyles id="links">
      <ImageLink link="/commissions"color={props => props.theme.lavender} image={crab}>Commissions</ImageLink>
      <ImageLink link="/gallery" color={props => props.theme.lavender} image={seascape}>Gallery</ImageLink>
      <ImageLink link="https://store.lisa-alley.com" color={props => props.theme.lavender} image={oysters}>Store</ImageLink>
      <ImageLink link="/contact" color={props => props.theme.lavender} image={purslane}>Contact</ImageLink>
    </ImageLinksStyles>
  )
};

export default ImageLinks