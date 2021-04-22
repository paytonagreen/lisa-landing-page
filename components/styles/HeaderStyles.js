import styled from 'styled-components';

const HeaderStyles = styled.header`
  display: flex;
  opacity: 0;
  justify-content: center;
  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.teal};
  margin: 0;
  z-index: 3;
`;

export const BurgerButton = styled.button`
  display: none;
  @media (max-width: 700px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 3.5%;
    right: 2%;
    height: 4rem;
    width: 4rem;
    z-index: 2;
    border: 2px solid ${(props) => props.theme.vermillion};
    outline: none;
    border-radius: 10%;
    background: ${(props) => props.theme.blue};
    font-size: 1rem;
    text-align: center;
    color: ${(props) => props.theme.tan};
    transition: all 10s;
  }
`;

export default HeaderStyles;
