import React from 'react'
import { Box } from '@chakra-ui/core'
import styled from '@emotion/styled'
import { useTheme } from 'emotion-theming'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import useLatestNewsTop5 from '../../hooks/useLatestNewsTop5'


const StyledAnchor = styled.a`
  margin-left: ${props => props.theme.space[2]};
`

export default () => {
  const theme = useTheme()

  const AnimatedPostLink = ({ post }) => {
    return (
      <Box mb={theme.footer.mbWidgetLink}>
          <FontAwesomeIcon icon={["fas","long-arrow-alt-right"]} size="xs"/> 
          <StyledAnchor className="footer-link" href={post.frontmatter.path}>
            {post.frontmatter.title}
          </StyledAnchor>
      </Box>
    )
  }

  const edges = useLatestNewsTop5()
  

  return edges.map( (edge, i) => 
          <AnimatedPostLink key={i} post={edge.node} />
  )
}