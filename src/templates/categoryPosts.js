import React from 'react'
import { graphql } from 'gatsby'

import ListTemplate from './common/ListTemplate'


//import config from '../../data/SiteConfig'
const config = {
    siteTitle: 'site title'
}

export default ({ data: {allMarkdownRemark: { edges }, }, pageContext }) => (
  <ListTemplate edges={edges} pageContext={pageContext} 
    seoTitle={`"${pageContext.category}" - ${config.siteTitle}`} 
    title={`Category:${' '}${pageContext.category}`} 
    categories={pageContext.categories}    
    tags={pageContext.tags}
    />
)


//        published: { eq: true }
/*
          fields {
            slug
            date(formatString: "MMMM DD, YYYY")
          }
          */
/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CategoryPage($skip: Int!, $limit: Int!, $category: String) {
    allMarkdownRemark(
      skip: $skip
      limit: $limit
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { 
        categories: { in: [$category] }

      } }
    ) {
      totalCount
      edges {
        node {

          excerpt
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