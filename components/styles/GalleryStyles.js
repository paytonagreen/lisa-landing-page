import styled from 'styled-components';

const GalleryStyles = styled.div`
  min-height: 100vh;
  margin-top: 5rem;
  background: ${(props) => props.theme.offwhite};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    text-align: center;
    color: ${props => props.theme.teal};
  }
  p {
    padding: 2rem;
    text-align: center;
    color: ${props => props.theme.teal};
    margin: auto;
  }
  a {
    display: inline-block;
    position: fixed;
    text-align: center;
    padding: 2rem;
    top: 3rem;
    right: 10rem;
    background: ${props => props.theme.lavender};
    border-radius: 100%;
    border: none;
    font-size: 2rem;
    z-index: 3;
    &:hover {
      background: ${props => props.theme.yellow};
      color: ${props => props.theme.teal};
    }
    transition: all 1s;
    @media(max-width: 700px) {
      right: 2rem;
    }
  }
`;

export default GalleryStyles;