import styled from 'styled-components';

const ImageLinksStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  z-index: 3;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-gap: 0;
  }
`;

export default ImageLinksStyles;
