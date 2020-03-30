import React from 'react'
import { graphql } from 'gatsby'

import ListTemplate from './common/ListTemplate'


//import config from '../../data/SiteConfig'
const config = {
    siteTitle: 'site title'
}

export default ({ data: {allMarkdownRemark: { edges }, }, pageContext }) => (
  <ListTemplate edges={edges} pageContext={pageContext} 
    seoTitle={`"${pageContext.tag}" - ${config.siteTitle}`} 
    title={`Tag:${' '}${pageContext.tag}`} 
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
  query TagPage($skip: Int!, $limit: Int!, $tag: String) {
    allMarkdownRemark(
      skip: $skip
      limit: $limit      
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { 
        tags: { in: [$tag] }

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