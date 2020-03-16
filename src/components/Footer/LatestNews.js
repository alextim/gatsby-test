import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Box } from 'rebass'
import styled from '@emotion/styled'
import { useTheme } from 'emotion-theming'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const StyledAnchor = styled.a`
  margin-left: ${props => props.theme.space[2]}px;
`

const LatestNews = () => {
  const theme = useTheme()

  const AnimatedPostLink = ({ post }) => {
    return (
      <Box mb={theme.footer.mbWidgetLink}>
          <FontAwesomeIcon icon={["fas","long-arrow-alt-right"]} size="sx"/> 
          <StyledAnchor className="footer-link" href={post.frontmatter.path}>{post.frontmatter.title}</StyledAnchor>
      </Box>
    )
  }

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            excerpt(pruneLength: 250)
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              path
              title
            }
          }
        }
      }
    }
  `)

  return (
    <Box>
    {  
        data.allMarkdownRemark.edges.map( edge => 
            <AnimatedPostLink post={edge.node} />
        )
    }
    </Box>
  )
}

export default LatestNews