import styled from 'styled-components';

const CommissionsStyles = styled.div`
  background: ${(props) => props.theme.lightblue};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  .content {
    margin: 0 10rem;
    @media (max-width: 700px) {
      margin: 7rem 3rem 0 3rem;
    }
  }
  h1 {
    color: ${(props) => props.theme.teal};
    text-align: center;
    margin: 0;
    font-size: 4rem;
    @media (max-width: 700px) {
      font-size: 3rem;
    }
  }
  p {
    margin: 0.75rem;
    font-size: 2rem;
    @media (max-width: 700px) {
      font-size: 1.5rem;
    }
  }
  ul {
    padding-left: 3rem;
    margin: 1rem;
  }
  li {
    list-style: square;
    padding-left: 0;
    font-size: 2rem;
    @media (max-width: 700px) {
      font-size: 1.5rem;
    }
  }
  #home-link {
    display: inline-block;
    position: fixed;
    text-align: center;
    padding: 2rem;
    top: 3rem;
    left: 3rem;
    background: ${(props) => props.theme.lavender};
    border-radius: 100%;
    border: none;
    font-size: 2rem;
    &:hover {
      background: ${(props) => props.theme.yellow};
    }
    @media (max-width: 700px) {
      top: 1rem;
      left: 1rem;
    }
    transition: all 1s;
  }
`;

export default CommissionsStyles;
