import React from 'react'
import { CSSReset, ThemeProvider } from '@chakra-ui/core'
import { ColorModeProvider } from '@chakra-ui/core'
import { Flex, Box } from '@chakra-ui/core'

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
export default props => {
  /*
  useEffect(() => {
    loadScript('https://use.fontawesome.com/fd58d214b9.js');
  }, []);
  */
 
  return (

    <ThemeProvider theme={theme}>
      <CSSReset />
      {/*
      <Global
        styles={css`

          body {
            box-sizing: border-box; 
            font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
            font-display: swap;
            font-display: fallback;
            overflow-x: hidden;
          }

          a {
            cursor: pointer;
            text-decoration: none;
          }

          body {
            color: #4a4a4a;
            font-size: 1em;
            font-weight: 400;
            line-height: 1.5;
          }


        }
       `}
      />
      */}
      <ColorModeProvider>
        <Flex flexDirection="column" minHeight="100vh">
          <Header />
          <Box as="main" width="100%" flex="1 1 auto">
              {props.children}
          </Box>  
          <Footer/>
        </Flex>
      </ColorModeProvider>
    </ThemeProvider>
  )
}