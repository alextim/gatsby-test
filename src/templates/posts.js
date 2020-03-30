import React from 'react'
import { graphql } from 'gatsby'

import ListTemplate from './common/ListTemplate'


export default ({
  data: {allMarkdownRemark: { edges }, },
  pageContext
}) => (
  <ListTemplate edges={edges} pageContext={pageContext} 
    seoTitle="blog" 
    title="blog" 
    categories={pageContext.categories}    
    tags={pageContext.tags}
  />
)

export const pageQuery = graphql`
  query BlogListQuery ($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { frontmatter: { published: { eq: true } }  }
      sort: { order: DESC, fields: [frontmatter___date]  }
      limit: $limit
      skip: $skip
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