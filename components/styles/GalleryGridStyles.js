import styled from 'styled-components';

const GalleryGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  margin: 2rem;
  max-width: 1100px;
  grid-gap: 2rem;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export default GalleryGridStyles;
