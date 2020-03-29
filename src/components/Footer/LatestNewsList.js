import React from 'react'
import { Flex, useTheme } from '@chakra-ui/core'

import AnimatedLink from '../AnimatedLink'
import useLatestNewsTop5 from '../../hooks/useLatestNewsTop5'

export default () => {
  const theme = useTheme()
  const mb = theme.footer.mbWidgetLink

  const posts = useLatestNewsTop5()
  
  return (
    <Flex direction="column" align="start">
      {
      posts.map( (post, i) => 
        <AnimatedLink key={i} 
          to={post.path}
          cn="footer-link"
          mb={mb}>{post.title}</AnimatedLink> 
        )
      }
    </Flex>
  )
}