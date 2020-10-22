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
      <ImageLink link="/commissions"image={crab}>Commissions</ImageLink>
      <ImageLink link="https://store.lisa-alley.com" image={seascape}>Store</ImageLink>
      <ImageLink link="/contact" image={oysters}>Contact</ImageLink>
      <ImageLink link="/gallery" image={purslane}>Gallery</ImageLink>
    </ImageLinksStyles>
  )
};

export default ImageLinks