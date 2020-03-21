import React from 'react'
import { Box, useTheme } from '@chakra-ui/core'
import styled from '@emotion/styled'

import Container from './../Container'
import TopHead from './TopHead'
import NavBar2 from './NavBar'


export default () => {
  const theme = useTheme()

  const StyledFlex = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    ${ props => props.theme.mediaQueries.md } {
      flex-direction: column-reverse;
    }
  `

  return (
    <StyledFlex>
      <Box bg={theme.header.colors.navbar.bg}>
        <Container>
          <NavBar2 />
        </Container>
      </Box>
      <Box
        color={theme.header.colors.topHead.text}  
        bg={theme.header.colors.topHead.bg} 
        fontSize={theme.fontSizes.sm}
      >
        <Container>
           <TopHead />
        </Container>
      </Box>
    </StyledFlex>
  )
}
