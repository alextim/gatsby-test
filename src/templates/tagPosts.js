import React from 'react'
import { graphql } from 'gatsby'

import ListTemplate from './common/ListTemplate'


export default ({ data: {allMarkdownRemark: { edges }, }, pageContext }) => (
  <ListTemplate edges={edges} pageContext={pageContext} title={`Таг:${' '}${pageContext.tag}`} />
)

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TagPage($skip: Int!, $limit: Int!, $tag: String) {
    allMarkdownRemark(
      skip: $skip
      limit: $limit      
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { 
        published: { eq: true }
        tags: { in: [$tag] }
      } }      
    ) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date
            featuredImage {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
            categories
            tags
          }
        }
      }
    }
  }
`