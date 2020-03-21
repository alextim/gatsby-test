import React from 'react'
import { Flex, Box, useTheme } from '@chakra-ui/core'

import Container from './../Container'
import TopHead from './TopHead'
import NavBar2 from './NavBar'

export default () => {
  const theme = useTheme()

  return (
    <Flex as="header" flexDirection={{sm: "column", md: "column-reverse"}} width="100%">
      <Box bg={theme.header.colors.navbarBg}>
        <Container>
          <NavBar2 />
        </Container>
      </Box>
      <Box bg={theme.header.colors.topHeadBg}>
        <Container>
           <TopHead />
        </Container>
      </Box>
    </Flex>
  )
}
