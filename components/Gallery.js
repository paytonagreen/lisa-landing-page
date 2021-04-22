import Head from 'next/head';
import { gql, useQuery } from '@apollo/client';

import GalleryStyles from './styles/GalleryStyles';
import GalleryGridStyles from './styles/GalleryGridStyles';
import ImageCard from './ImageCard';
import Loader from './Loader';

const GALLERY_QUERY = gql`
  query GALLERY_QUERY {
    items(orderBy: createdAt_DESC) {
      id
      title
      image
    }
  }
`;

const Center = styled.div`
  text-align: center;
`;

function Gallery() {
  const { data, loading, error } = useQuery(GALLERY_QUERY);

  return (
    <GalleryStyles id='gallery'>
      <Head>
        <title>Lisa Alley | Gallery</title>
      </Head>
      <a id='home-link' href='/#links'>
        Home
      </a>
      <div className='content'>
        <h1>GALLERY</h1>
        <p>Past works for reference.</p>
        <a href='https://store.lisa-alley.com'>
          <p>Proceed to webstore for available originals and prints.</p>
        </a>
        {loading && (
          <Center>
            <Loader />
          </Center>
        )}
        {error && <p>{error.message}</p>}
        {!loading && !error && (
          <GalleryGridStyles>
            {data &&
              data.items.map((item) => {
                return <ImageCard key={item.id} item={item} />;
              })}
          </GalleryGridStyles>
        )}
      </div>
    </GalleryStyles>
  );
}

export default Gallery;
