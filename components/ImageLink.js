import ImageLinkStyles from './styles/ImageLinkStyles';

function ImageLink({ children, image, color, link }) {
  return (
    <ImageLinkStyles color={color} image={image}>
      <a href={link}>
        <div className='content'>{children}</div>
      </a>
    </ImageLinkStyles>
  );
}

export default ImageLink;
