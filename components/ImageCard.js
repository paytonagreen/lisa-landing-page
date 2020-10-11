import React from 'react';
import styled from 'styled-components'

const ImageCardStyles = styled.div`
  height: 25vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 30vw;
  img {
    width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

function ImageCard ({image}) {
  return (
    <ImageCardStyles>
      <img src={image} alt=""/>
    </ImageCardStyles>
  )
}

export default ImageCard;