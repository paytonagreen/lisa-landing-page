import styled from "styled-components";

import showcaseBackground from "../../public/img/background.jpg";


const HomeStyles = styled.div`
  min-height: calc(100vh - 110px);
  .showcase {
    padding: 2rem;
    min-height: calc(100vh - 20vh);
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(${showcaseBackground}) no-repeat center center/cover;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 700px) {
      min-height: calc(100vh - 100px);
    }
    .showcase-content {
      display: flex;
      /* background: rgb(0,128,128,.3); */
      border-radius: 10px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      z-index: 3;
      padding: 3rem;
      text-align: center;
      color: ${(props) => props.theme.yellow};
      h1 {
        display: block;
      }
    }
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      z-index: 2;
      @media (max-width: 700px) {
        top: 100px;
      }
    }
  }
  .links {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: 20vh;
    width: 100%;
    z-index: 3;
    .link {
      z-index: 3;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: ${props => props.theme.lavender};
      color: ${props => props.theme.teal};
      &:nth-child(2) {
        background-color: ${props => props.theme.teal};
        color: ${props => props.theme.yellow};
        .line {
          background: ${props => props.theme.yellow}
        }
      }
      h2 {
        padding: 0;
        margin: 0;
      }
      p {
        margin: 0;
        text-align: center;
        padding: 0 3rem;
      }
      .line {
        margin: 1rem;
        height: 2px;
        width: 70%;
        background: ${props => props.theme.teal};
      }
    }
  }
`;

export default HomeStyles;
