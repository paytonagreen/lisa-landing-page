import styled from 'styled-components';

import showcaseBackground from '../../public/img/background.jpg';

const HomeStyles = styled.div`
  min-height: calc(100vh);
  #showcase {
    padding: 2rem;
    min-height: calc(100vh);
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(${showcaseBackground}) no-repeat center center/cover;
    display: flex;
    justify-content: center;
    align-items: center;
    .showcase-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      z-index: 3;
      padding: 2rem;
      text-align: center;
      color: ${(props) => props.theme.yellow};
      h1 {
        display: block;
        font-size: 10rem;
        margin: 0;
        @media(max-width: 700px) {
          font-size: 5rem;
        }
      }
      a {
        z-index: 3;
        position: absolute;
        bottom: 3rem;
        padding: 2rem;
        border-radius: 100%;
        border: none;
        font-size: 2rem;
        background-color: ${props => props.theme.lavender};
        color: ${props => props.theme.black}
      }
    }
    &::before {
      content: '';
      position: absolute;
      max-width: 1100px;
      margin: 0 auto;
      width: 100%;
      height: 100vh;
      background: rgba(0, 0, 0, 0.8);
      z-index: 2;
    }
  }
`;

export default HomeStyles;
