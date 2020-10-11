import styled from 'styled-components';

import carrot from '../../public/img/small/carrot.jpg';

const ContactStyles = styled.div`
  background: url(${carrot}) no-repeat center center/cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  width: 100%;
  max-width: 1100px;
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 700px) {
  }
  .content {
    background: rgba(0,0,0,0.5);
    width: 50%;
    padding: 1rem;
    @media(max-width: 700px) {
      width: 80%;
    }
    p {
      color: ${(props) => props.theme.lavender};
      text-align: center;
      font-size: 3rem;
      margin: 0;
      @media (max-width: 700px) {
        font-size: 2rem;
      }
      a {
        color: inherit;
      }
    }
  }
  #home-link {
    display: inline-block;
    position: relative;
    text-align: center;
    padding: 2rem;
    top: -20rem;
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
  }
`;

export default ContactStyles;
