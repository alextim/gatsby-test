import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import PostListing from '../components/PostListing'
import Pagination from '../components/Pagination'
import Pagination2 from '../components/Pagination2'

export default ({
  data: {
    allMarkdownRemark: { edges },
  },
  pageContext
}) => {


  return (
    <Layout>
      <SEO />
      <PostListing postEdges={edges} />
      <Pagination

          nbPages={pageContext.nbPages}
          currentPage={pageContext.currentPage}
          blogPath={pageContext.blogPath}
        />
        <Pagination2
          totalPages={pageContext.nbPages}
          currentPage={pageContext.currentPage}
          url={pageContext.blogPath}
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