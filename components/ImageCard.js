import ImageCardStyles from './styles/ImageCardStyles';

function ImageCard({ item }) {
  return <ImageCardStyles background={item.image} />;
}

export default ImageCard;
