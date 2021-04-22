import styled from 'styled-components';

const ContactFooterStyles = styled.footer`
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 4rem;
  z-index: 8;
  text-align: right;
  a {
    color: ${(props) => props.theme.red};
  }
`;

export default ContactFooterStyles;
