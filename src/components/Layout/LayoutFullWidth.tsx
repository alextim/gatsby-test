import React from 'react';
import { CSSReset, ThemeProvider } from '@chakra-ui/core';
import { ColorModeProvider } from '@chakra-ui/core';
import { Flex, Box } from '@chakra-ui/core';

import ErrorBoundary from '../ErrorBoundary';
import theme from '../theme';
import Header from '../Header';
import Footer from '../Footer';
import '../fontawesome';
import GlobalStyles from './GlobalStyles';

/*
const loadScript = src => {
  const tag = document.createElement('script');
  tag.src = src;
  tag.defer = true;

  document.getElementsByTagName('body')[0].appendChild(tag);
}
*/

const LayoutFullWidth: React.FC = ({ children }) => {
  /*
  useEffect(() => {
    loadScript('https://use.fontawesome.com/fd58d214b9.js');
  }, []);
  */
  // https://snook.ca/archives/html_and_css/font-size-with-rem
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <GlobalStyles />

        <ColorModeProvider>
          <Flex flexDirection="column" minHeight="100vh">
            <Header />
            <Box as="main" width="100%" flex="1 1 auto">
              {children}
            </Box>
            <Footer />
          </Flex>
        </ColorModeProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default LayoutFullWidth;
