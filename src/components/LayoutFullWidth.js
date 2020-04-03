import React from 'react'
import { Global, css } from '@emotion/core'
import { CSSReset, ThemeProvider } from '@chakra-ui/core'
import { ColorModeProvider } from '@chakra-ui/core'
import { Flex, Box } from '@chakra-ui/core'

import ErrorBoundary from './ErrorBoundary'
import theme from './theme'
import Header from './Header'
import Footer from './Footer'
import './layout.scss'
import './fontawesome'

/*
const loadScript = src => {
  const tag = document.createElement('script');
  tag.src = src;
  tag.defer = true;

  document.getElementsByTagName('body')[0].appendChild(tag);
}
*/
export default ({children}) => {

  /*
  useEffect(() => {
    loadScript('https://use.fontawesome.com/fd58d214b9.js');
  }, []);
  */
 //https://snook.ca/archives/html_and_css/font-size-with-rem
  return (
  <ErrorBoundary>
    <ThemeProvider theme={theme}>
      <CSSReset />

      <Global
        styles={css`
          body {
            box-sizing: border-box; 
            font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
            font-display: swap;
            font-display: fallback;
            overflow-x: hidden;
            color: ${theme.colors.text};
            font-size: 1em;
            font-weight: 400;
            line-height: 1.75;
          }


          a {
            cursor: pointer;
            text-decoration: none;
            &:hover {
              color: red;
            }
          }


          h1, h2, h3, h4, h5, h6 {
            color: ${theme.colors.heading};
            margin: 0 0 10px;
            font-weight: 500;
            line-height: 1.5;
          }
          h2 {
            font-size: 2.1875em;
          }
          h3 {
            font-size: 1.25em;
          }
          p {
            margin-bottom: 0 0 0.625em 0;
          }
          .shadow {
            box-shadow: 0 5px 13px rgba(0,0,0,.17);
          }
          .breadcrumb__list {
            display: flex;
            li {
              list-style-type: none;
            }
          }
          .fa-hover:hover .fa-hover-hidden,
          .fa-hover .fa-hover-show {
          //    color: transparent;
            display: none;
          }
          .fa-hover:hover .fa-hover-show {
          //    color: inherit;
            display: inline-block;
          }
        }
       `}
      />

      <ColorModeProvider>
        <Flex flexDirection="column" minHeight="100vh">
          <Header />
          <Box as="main" width="100%" flex="1 1 auto">
              {children}
          </Box>  
          <Footer/>
        </Flex>
      </ColorModeProvider>
    </ThemeProvider>
  </ErrorBoundary>
  )
}