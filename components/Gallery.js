import React from 'react';
import styled from 'styled-components';
import ImageCard from './ImageCard';

import bouquet from '../public/img/bouquet.jpg';
import carrot from '../public/img/carrot.jpg';
import crab from '../public/img/crab.jpg';
import oysters from '../public/img/oysters.jpg';
import purslane from '../public/img/purslane.jpg';
import scallop from '../public/img/scallop.jpg';
import seascape from '../public/img/seascape.jpg';
import sempiternal from '../public/img/sempiternal.jpg';
import steak from '../public/img/steak.jpg';

const picsArr = [
  bouquet,
  carrot,
  crab,
  oysters,
  purslane,
  scallop,
  seascape,
  sempiternal,
  steak,
];

const cardFactory = () => {
  picsArr.forEach((image) => {
    return <ImageCard image={image} />;
  });
};

const cards = cardFactory();

const GalleryStyles = styled.div`
  min-height: 100vh;
  background: ${(props) => props.theme.offwhite};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    text-align: center;
    color: ${props => props.theme.teal};
  }
  a {
    display: inline-block;
    position: relative;
    text-align: center;
    padding: 2rem;
    top: 3rem;
    right: -35rem;
    background: ${props => props.theme.lavender};
    border-radius: 100%;
    border: none;
    font-size: 2rem;
    z-index: 3;
    &:hover {
      background: ${props => props.theme.yellow};
      color: ${props => props.theme.teal};
    }
    transition: all 1s;
    @media(max-width: 700px) {
      right: -12rem
    }
  }
`;

const GalleryGrid = styled.div`
  margin: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`;

function Gallery() {
  return (
    <GalleryStyles id="gallery">
      <a href="#links">Home</a>
      <div className="content">
      <h1>Gallery</h1>
      <GalleryGrid>
      <ImageCard image={bouquet}></ImageCard>
      <ImageCard image={carrot}></ImageCard>
      <ImageCard image={crab}></ImageCard>
      <ImageCard image={oysters}></ImageCard>
      <ImageCard image={scallop}></ImageCard>
      <ImageCard image={purslane}></ImageCard>
      <ImageCard image={sempiternal}></ImageCard>
      <ImageCard image={seascape}></ImageCard>
      <ImageCard image={steak}></ImageCard>
      </GalleryGrid>
      </div>
    </GalleryStyles>
  );
}

export default Gallery;
