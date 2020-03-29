import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import kebabCase from 'lodash/kebabCase'

import Utils from './../lib/utils'
import Layout from './../components/Layout'
import SEO from './../components/SEO'

const SuggestionBar = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
`
//background: ${props => props.theme.colors.white.light};
//box-shadow: ${props => props.theme.shadow.suggestion};

const PostSuggestion = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 3rem 0 3rem;
`

const Category = ({items}) => 
  <div>{
    items.map( (item, i) => 
      <Link key={i} to={`/${kebabCase(item)}`}>
        <strong>{item}</strong> {i < items.length - 1 ? `, ` : ``}
      </Link>
    )
  }</div>

const Tax = ({items, taxSlug}) =>
  <div>{
    items.map( (item, i) => 
      <Link key={i} to={`/${taxSlug}/${kebabCase(item)}`}>
        <strong>{item}</strong> {i < items.length - 1 ? `, ` : ``}
      </Link>
    )
  }</div>



export default function Template({
  data, // this prop will be injected by the GraphQL query below.
  pageContext
}) {
  const { next, prev } = pageContext;

  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark
  const { title, description, date, url, featuredImage, tags, categories } = frontmatter
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
        { tags && <Tax items={tags} taxSlug="tags"/> }
        { categories && <Category items={categories} /> }
        { featuredImgFluid && <Img fluid={featuredImgFluid} alt={title}/> }

        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>

    <SuggestionBar>
        <PostSuggestion>
          {prev && (
            <Link to={prev.node.frontmatter.path} rel="prev">
              {"< "}
              <h3>{prev.node.frontmatter.title}</h3>
            </Link>
          )}
        </PostSuggestion>
        <PostSuggestion>
          {next && (
            <Link to={next.node.frontmatter.path} rel="next">
              
              <h3>{next.node.frontmatter.title}</h3>{" >"}
            </Link>
          )}
        </PostSuggestion>
      </SuggestionBar>  
        
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
        categories
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