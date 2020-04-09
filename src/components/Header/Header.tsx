import React from 'react';
import { Box, useTheme } from '@chakra-ui/core';
import styled from '@emotion/styled';

import { Container } from '../Container';
import TopHead from './TopHead';
import NavBar2 from './NavBar';

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default () => {
  const theme = useTheme();

  return (
    <HeaderWrapper>
      <Box
        color={theme.header.colors.topHead.text}  
        bg={theme.header.colors.topHead.bg} 
        fontSize={theme.fontSizes.sm}
      >
        <Container>
           <TopHead />
        </Container>
      </Box>

      <Box bg={theme.header.colors.navbar.bg}>
        <Container>
          <NavBar2 />
        </Container>
      </Box>
    </HeaderWrapper>
  );
};
