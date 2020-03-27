import React from 'react'
import { Box } from '@chakra-ui/core'
import styled from '@emotion/styled'
import { useTheme } from 'emotion-theming'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import useLatestNews from '../../hooks/useLatestNews'


const StyledAnchor = styled.a`
  margin-left: ${props => props.theme.space[2]};
`

const LatestNews = () => {
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

  const edges = useLatestNews()
  

  return edges.map( (edge, i) => 
          <AnimatedPostLink key={i} post={edge.node} />
  )
}

export default LatestNews