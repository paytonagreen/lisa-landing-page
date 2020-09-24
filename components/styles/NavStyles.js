import styled from 'styled-components'

const NavStyles = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  max-width: 1100px;
  padding: 1.5rem;
  @media(max-width: 700px) {
    justify-content: center;
    padding: 1rem;
  }
  h1 {
    margin: 0;
    font-size: 4rem;
    color: ${props => props.theme.yellow}
  }
  ul {
    display: flex;
    list-style: none;
    font-size: 2rem;
    @media(max-width: 700px) {
      display: none;
    }
    li.active {
        border-bottom: 2px solid ${props => props.theme.blue};
      }
    li {
      margin-left: 2rem;
      border-bottom: 2px solid transparent;
      transition: all 1.5s ease-out;
      
      &:hover {
        border-bottom: 2px solid ${props => props.theme.lightblue};
      }
    }
  }
`;

export default NavStyles