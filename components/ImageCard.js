import React from 'react';
import Link from 'next/link';

import ImageCardStyles from './styles/ImageCardStyles';

function ImageCard({ item }) {
  return (
    <Link
      href={{
        pathname: 'https://store.lisa-alley.com/item',
        query: { id: item.id },
      }}
    >
      <a>
        <ImageCardStyles background={item.image}>
        </ImageCardStyles>
      </a>
    </Link>
  );
}

export default ImageCard;
