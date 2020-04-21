import React from 'react';
import { Box, useTheme } from '@chakra-ui/core';
import styled from '@emotion/styled';

import { ITheme } from '../../theme.d';
import ViewModeContext from '../ViewModeContext';
import { Container } from '../../Container';
import TopHead from './TopHead';
import NavBar from './NavBar';

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Header = () => {
  const theme = (useTheme() as unknown) as ITheme;

  return (
    <ViewModeContext.Consumer>
      {(context) => (
        <HeaderWrapper>
          {!context.isPrint && (
            <Box
              color={theme.header.colors.topHead.text}
              bg={theme.header.colors.topHead.bg}
              fontSize={theme.fontSizes.sm}
            >
              <Container>
                <TopHead />
              </Container>
            </Box>
          )}
          <Box bg={theme.header.colors.navbar.bg}>
            <Container>
              <NavBar isPrint={context.isPrint} />
            </Container>
          </Box>
        </HeaderWrapper>
      )}
    </ViewModeContext.Consumer>
  );
};

export default Header;
