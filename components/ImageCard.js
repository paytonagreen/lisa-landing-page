import React from 'react';
import ImageCardStyles from './styles/ImageCardStyles'

function ImageCard ({image}) {
  return (
    <ImageCardStyles>
      <img src={image} alt=""/>
    </ImageCardStyles>
  )
}

export default ImageCard;