import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { gql, useQuery } from '@apollo/client'

import GalleryStyles from './styles/GalleryStyles';
import ImageCard from './ImageCard';

const GALLERY_QUERY = gql`
  query GALLERY_QUERY {
    items(orderBy: createdAt_DESC) {
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
  return (
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
        {data && data.items.map((item) => {
            return <ImageCard key={item.id} item={item} />
          })}
        </GalleryGrid>
      </div>
    </GalleryStyles>
    )
  ;
}

export default Gallery;
