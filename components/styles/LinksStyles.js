import styled from 'styled-components';

const LinksStyles = styled.div`
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

export default LinksStyles;