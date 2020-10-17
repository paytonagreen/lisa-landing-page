import styled from 'styled-components'

const ImageLinkStyles = styled.div`
min-width: 100%;
  margin: 0;
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
  a {
    width: 75%;
  }
  .content {
      background: rgba(0,0,0,0.7);
      padding: 3rem;
      color: ${(props) => props.theme.lavender};
      text-align: center;
      transition: all .5s;
      &:hover {
        background: rgba(200,200,200,0.7);
        color: ${props => props.theme.black};
      }
      @media(max-width: 700px) {
        font-size: 2.5rem;
      }
    a {
      color: inherit;
      margin: 0;
    }
  }
`;

export default ImageLinkStyles;