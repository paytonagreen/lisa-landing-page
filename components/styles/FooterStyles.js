import styled from 'styled-components';

const FooterStyles = styled.footer`
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 3rem;
  z-index: 8;
  text-align: right;
  a {
    color: ${(props) => props.theme.black};
  }
  p {
    margin: 0;
  }
`;

export default FooterStyles;
