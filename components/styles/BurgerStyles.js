import styled from 'styled-components';

const BurgerStyles = styled.div`
  z-index: 1;
  transform: translateY(-100%);
  transition: all 1s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-height: 40vh;
  background: ${(props) => props.theme.blue};
  position: absolute;
  top: 0;
  text-align: center;
  padding: 2rem;
  font-size: 2rem;
  color: ${(props) => props.theme.lightblue};
  ${(props) => props.open && `transform: translateX(0);`};
  ul {
    list-style: none;
    padding: 0;
    li {
      padding: 1rem;
      border-bottom: 2px solid ${(props) => props.theme.vermillion};
      &:first-child {
        border-top: 2px solid ${(props) => props.theme.vermillion};
      }
      button {
        background: inherit;
        font-size: inherit;
        border: none;
        outline: none;
        color: inherit;
      }
    }
  }
`;

export default BurgerStyles;
