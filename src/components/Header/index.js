//import { Link } from 'gatsby'
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Box } from '@chakra-ui/core'

import Container from './../Container'
import NavBar2 from './NavBar'

export default () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Box as="header" width="100%">
      <Container>
        <NavBar2 />
        <h1>{data.site.siteMetadata.title}</h1>
      </Container>
    </Box>
  )
}
