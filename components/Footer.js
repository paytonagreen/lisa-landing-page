import styled from 'styled-components';

const FooterStyles = styled.footer`
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 3rem;
  z-index: 8;
  text-align: right;
  a {
  color: ${props => props.theme.black};
  }
  p {
  margin: 0;
  }
`;

function Footer() {
  return(
    <FooterStyles>
      <a href="https://paytongreen.com"><p>Web Design &copy; Payton Green 2020</p></a>
    </FooterStyles>
  )
}

export default Footer;