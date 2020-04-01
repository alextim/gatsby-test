import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import kebabCase from 'lodash/kebabCase'

import Utils from './../lib/utils'
import SEO from '../components/SEO'
import { IconLink, IconLinkR } from '../components/IconLink'

import BlogLayout from './common/BlogLayout'


const PrevNext = ({ prev, next }) => {
  const PrevNextWrap  = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
  `
  return (
    <PrevNextWrap>
        {prev && (
          <h3><IconLink to={prev.url} rel="prev" icon="long-arrow-alt-left">
            {prev.title}
          </IconLink></h3>
        )}
        {next && (
          <h3><IconLinkR to={next.url} rel="next" icon="long-arrow-alt-right">
            {next.title}
          </IconLinkR></h3>     

        )}
    </PrevNextWrap>  
  )
}

const Tax = ({ items, taxSlug }) =>
  <div>
    {
      items.map( (item, i) => 
        <Link key={i} to={`/${taxSlug}/${kebabCase(item)}`}>
          <strong>{item}</strong> {i < items.length - 1 ? `, ` : ``}
        </Link>
      )
    }
  </div>

const Category = ({ items }) => <Tax items={items} taxSlug="category" />

export default ({
  data, // this prop will be injected by the GraphQL query below.
  pageContext
}) => {
  const { next, prev } = pageContext

  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt, fields } = markdownRemark
  const { title, description, date, featuredImage, tags, categories } = frontmatter
  const featuredImgFluid = featuredImage ? featuredImage.childImageSharp.fluid : null
  const imgSrc = featuredImgFluid ? featuredImgFluid.src : null
  const url = fields.slug

  return (
    <BlogLayout>
      <SEO title={title} 
          description={description || excerpt} 
          url={url} 
          image={imgSrc}
          type="article"
          date={date}/> 

          <article>
            <h1>{title}</h1>
            <div>{Utils.formatDate(date)}</div>
            { tags && <Tax items={tags} taxSlug="tag"/> }
            { categories && <Category items={categories} /> }
            { featuredImgFluid && <Img fluid={featuredImgFluid} alt={title}/> }

            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </article>

          <PrevNext prev={prev} next={next} />

    </BlogLayout>
  )
}

export const pageQuery = graphql`
  query BlogPostById($id: String!) {
    markdownRemark(id: {eq: $id}) {
      html
      excerpt(pruneLength: 160)
      fields {
        slug
      }
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