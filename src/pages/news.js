import React from 'react'
import { graphql } from 'gatsby'
import { Box } from '@chakra-ui/core'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import NewsItem from "../components/NewsItem"

export default ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map( (edge, i) => <NewsItem key={i} node={edge.node} /> )

  return (
    <Layout>
      <SEO />
      {Posts || <Box>No Posts</Box>}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { published: { eq: true } }  }
      sort: { order: DESC, fields: [frontmatter___date]  }
      ) {
      edges {
        node {
          id
          excerpt(pruneLength: 160)
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            path
            title
            category
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`