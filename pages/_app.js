import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/client';
import '../styles/globals.css';
import Meta from '../components/Meta';
import withData from '../hooks/withData';

const theme = {
  red: '#FF0000',
  lavender: '#E6E6FA',
  yellow: '#f2a900',
  black: '#393939',
  grey: '3A3A3A',
  teal: '#008080',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  brown: '#A25F08',
  tan: '#F4E6CC',
  offwhite: '#FCF5EB',
  blue: '#2F8CAB',
  lightblue: '#C9E2E9',
  vermillion: '#FE4902',
  maxwidth: '1100px',
};

const GlobalStyle = createGlobalStyle`
  

  html {
    scroll-behavior: smooth;
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    background-color: ${(props) => props.theme.offwhite};
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'Alegreya Sans SC', sans-serif;
    list-style: none;
  }
  a,
  button{
    text-decoration: none;
    color: ${theme.black};
    font-family: 'Alegreya Sans SC', sans-serif;
  }
`;

const Inner = styled.div`
  margin: auto;
  max-width: 1100px;
`;
function MyApp({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Meta />
        <Inner>
          <Component {...pageProps} />
        </Inner>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default withData(MyApp);
