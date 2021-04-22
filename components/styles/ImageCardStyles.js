import styled from 'styled-components';

const ImageCardStyles = styled.div`
  background: url(${(props) => props.background}) no-repeat center
    center/contain;
  height: 33vh;
`;

export default ImageCardStyles;
