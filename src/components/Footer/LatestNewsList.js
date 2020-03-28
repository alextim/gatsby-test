import React from 'react'
import { Flex, useTheme } from '@chakra-ui/core'

import AnimatedLink from '../AnimatedLink'
import useLatestNewsTop5 from '../../hooks/useLatestNewsTop5'

export default () => {
  const theme = useTheme()
  const mb = theme.footer.mbWidgetLink

  const edges = useLatestNewsTop5()
  
  return (
    <Flex direction="column" align="start">
      {
      edges.map( (edge, i) => 
        <AnimatedLink key={i} 
          to={edge.node.frontmatter.path}
          cn="footer-link"
          mb={mb}>{edge.node.frontmatter.title}</AnimatedLink> 
        )
      }
    </Flex>
  )
}