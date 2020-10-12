import styled from 'styled-components'

const ImageLinkStyles = styled.div`
min-width: 100%;
  background: url(${props => props.image}) no-repeat center center/cover;
  width: 100%;
  height: calc(50vh - .5rem);
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  @media(max-width: 700px) {
    height: 50vh;
  }
  .content {
      background: rgba(0,0,0,0.7);
      padding: 3rem;
      color: ${(props) => props.color};
      width: 75%;
      text-align: center;
      @media(max-width: 700px) {
        font-size: 2.5rem;
      }
    a {
      color: inherit;
    }
  }
`;

export default ImageLinkStyles;