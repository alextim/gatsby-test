import React from 'react'
import { graphql } from 'gatsby'

import ListTemplate from './common/ListTemplate'
import postArchiveHelper from './../helpers/postArchiveHelper'


//import config from '../../data/SiteConfig'
const config = {
    siteTitle: 'site title'
}

export default ({ data: {allMarkdownRemark: { edges }, }, pageContext }) => {
  const title = `Архив за ${postArchiveHelper.getTitle(pageContext.yyyymm)}`
  return (
  <ListTemplate edges={edges} pageContext={pageContext} 
    seoTitle={`"${title}" - ${config.siteTitle}`} 
    title={title} 
    />
)
  }

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query ArchivePage($skip: Int!, $limit: Int!, $yyyymm: String) {
    allMarkdownRemark(
      skip: $skip
      limit: $limit      
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { 
        frontmatter: { 
          published: { eq: true }
        }
        fields: {
          yyyymm: { eq: $yyyymm }
        }
      }      
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