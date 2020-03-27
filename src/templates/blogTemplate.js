import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Utils from './../lib/utils'

import Layout from './../components/Layout'
import SEO from './../components/SEO'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark
  const { title, description, date, url, featuredImage } = frontmatter
  const featuredImgFluid = featuredImage ? featuredImage.childImageSharp.fluid : null
  const imgSrc = featuredImgFluid ? featuredImgFluid.src : null




  return (
    <Layout>
        <SEO title={title} 
          description={description || excerpt} 
          url={url} 
          image={imgSrc}
          type="article"
          date={date}/> 
      
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{title}</h1>
        <h2>{Utils.formatDate(date)}</h2>
  { featuredImgFluid && <Img fluid={featuredImgFluid} alt={title}/> }
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
        
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt(pruneLength: 100)
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        path
        title
        description
        category
        featured
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
`