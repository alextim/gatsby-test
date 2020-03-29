import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import PostListing from '../components/PostListing'
import Pagination from '../components/Pagination'

import toPosts from './toPosts'


export default ({
  data: {
    allMarkdownRemark: { edges },
  },
  pageContext
}) => {

    //.filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria

  const posts = toPosts(edges)

  return (
    <Layout>
      <SEO />
      <PostListing posts={posts} />
      <Pagination
          nbPages={pageContext.nbPages}
          currentPage={pageContext.currentPage}
          blogPath={pageContext.blogPath}
        />

    </Layout>
  )
}

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