import styled from 'styled-components';

const ContactFooterStyles = styled.footer`
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 4rem;
  z-index: 8;
  text-align: right;
  a {
  color: ${props => props.theme.red};
  }
`;

function ContactFooter() {
  return(
    <ContactFooterStyles>
      <a href="https://paytongreen.com"><p>Web Design &copy; Payton Green 2020</p></a>
    </ContactFooterStyles>
  )
}

export default ContactFooter;