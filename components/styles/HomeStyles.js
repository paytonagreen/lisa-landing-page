import styled from "styled-components";

import showcaseBackground from "../../public/img/background.jpg";

const HomeStyles = styled.div`
  .showcase {
    padding: 2rem;
    min-height: calc(100vh - 110px);
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
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      z-index: 2;
      h1 {
        display: block;
        color: ${(props) => props.theme.red};
      }
    }
    &::before {
      content: "";
      position: absolute;
      top: 110px;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      z-index: 1;
      @media (max-width: 700px) {
        top: 100px;
      }
    }
  }
`;

export default HomeStyles;
