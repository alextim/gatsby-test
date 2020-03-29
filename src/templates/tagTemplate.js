import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import PostListing from '../components/PostListing'
import toPosts from './toPosts'

//import config from '../../data/SiteConfig'
const config = {
    siteTitle: 'site title'
}

export default ({ data, pageContext }) => {
  const posts = toPosts(data.allMarkdownRemark.edges)
  return (
    <Layout>
        <SEO
          title={`Posts tagged as "${pageContext.tag}" | ${config.siteTitle}`}
        />
        <h1>Tag:{' '}{pageContext.tag}</h1>
        <PostListing posts={posts} />
    </Layout>
  )
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            date(formatString: "MMMM DD, YYYY")
          }
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