import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import PostListing from '../components/PostListing'

export default ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {


  return (
    <Layout>
      <SEO />
      <PostListing postEdges={edges} />
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
            categories
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