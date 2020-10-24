import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { gql, useQuery } from '@apollo/client'

import GalleryStyles from './styles/GalleryStyles';
import ImageCard from './ImageCard';

import bouquet from '../public/img/small/bouquet.jpg';
import carrot from '../public/img/small/carrot.jpg';
import crab from '../public/img/small/crab.jpg';
import oysters from '../public/img/small/oysters.jpg';
import purslane from '../public/img/small/purslane.jpg';
import scallop from '../public/img/small/scallop.jpg';
import seascape from '../public/img/small/seascape.jpg';
import sempiternal from '../public/img/small/sempiternal.jpg';
import steak from '../public/img/small/steak.jpg';
import chili from '../public/img/small/chili.jpg';
import halibut from '../public/img/small/halibut.jpg';
import mignardise from '../public/img/small/mignardise.jpg';


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

const GALLERY_QUERY = gql`
  query GALLERY_QUERY {
    items {
      id
      title
      image
    }
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  margin: 2rem;
  max-width: 1100px;
  grid-gap: 2rem;
  @media(max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

function Gallery() {
  const { data, loading, error } = useQuery(GALLERY_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) <p>{error.message}</p>;
  console.log(data);
  if (data) return (
    <GalleryStyles id="gallery">
      <Head>
        <title>Lisa Alley | Gallery</title>
      </Head>
      <a id="home-link" href="/#links">
        Home
      </a>
      <div className="content">
        <h1>GALLERY</h1>
        <p>Past works for reference.</p>
        <a href="https://store.lisa-alley.com">
          <p>Proceed to webstore for available originals and prints.</p>
        </a>
        <GalleryGrid>
          {data.items.map((item) => {
            return <ImageCard key={item.id} item={item} />
          })}
        </GalleryGrid>
      </div>
    </GalleryStyles>
  );
}

export default Gallery;
