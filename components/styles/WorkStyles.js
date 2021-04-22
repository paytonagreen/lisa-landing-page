import styled from 'styled-components';

const WorkStyles = styled.div`
  h2 {
    text-align: center;
    padding: 2rem;
    color: ${(props) => props.theme.vermillion};
    border-top: 1px solid ${(props) => props.theme.vermillion};
    margin: 0;
    margin-bottom: 80px;
  }
  .example1 {
    display: grid;
    grid-template-columns: 2fr 1fr;
    box-shadow: 5px 10px rgba(0, 0, 0, 0.03);
    @media (min-width: 1100px) {
      border-left: 1px solid rgba(0, 0, 0, 0.15);
    }
    @media (max-width: 1000px) {
      grid-template-columns: 1fr;
    }
    a {
      padding: 0;
      margin: 0;
      object-fit: cover;
    }
    img {
      width: 100%;
      object-fit: cover;
    }
    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 10px;
      background: ${(props) => props.theme.blue};
      border-left: 1px solid ${(props) => props.theme.vermillion};
      color: ${(props) => props.theme.tan};
      @media (max-width: 1000px) {
        text-align: center;
        border: none;
      }
      ul {
        list-style: none;
        padding: 0;
        li {
          @media (max-width: 1000px) {
            text-align: center;
          }
        }
      }
      h1 {
        color: ${(props) => props.theme.lightblue};
      }
    }
  }
  .example2 {
    display: grid;
    grid-template-columns: 1fr 2fr;
    box-shadow: 5px 10px rgba(0, 0, 0, 0.03);
    @media (min-width: 1100px) {
      border-left: 1px solid rgba(0, 0, 0, 0.15);
    }
    @media (max-width: 1000px) {
      grid-template-columns: 1fr;
    }
    img {
      width: 100%;
    }
    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: right;
      padding: 10px;
      background: ${(props) => props.theme.lightblue};
      border-right: 1px solid ${(props) => props.theme.vermillion};
      color: ${(props) => props.theme.vermillion};
      @media (max-width: 1000px) {
        text-align: center;
        border: none;
      }
      ul {
        list-style: none;
        padding: 0;
      }
    }
    h1 {
      color: ${(props) => props.theme.blue};
    }
  }
`;

export default WorkStyles;
