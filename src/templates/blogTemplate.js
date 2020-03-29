import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import kebabCase from 'lodash/kebabCase'

import Utils from './../lib/utils'
import Layout from './../components/Layout'
import SEO from './../components/SEO'

import LatestPosts from './../components/widgets/LatestPosts'
import PostArchive  from './../components/widgets/PostArchive'
import PostCategories  from './../components/widgets/PostCategories'



const SuggestionBar = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
`
const PostSuggestion = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 3rem 0 3rem;
`

const PrevNext = ({ prev, next }) => (
  <SuggestionBar>
    <PostSuggestion>
      {prev && (
        <Link to={prev.path} rel="prev">
          {"< "}
          <h3>{prev.title}</h3>
        </Link>
      )}
    </PostSuggestion>
    <PostSuggestion>
      {next && (
        <Link to={next.path} rel="next">
          
          <h3>{next.title}</h3>{" >"}
        </Link>
      )}
    </PostSuggestion>
  </SuggestionBar>  

) 

const Category = ({ items }) => 
  <div>
    {
      items.map( (item, i) => 
        <Link key={i} to={`/${kebabCase(item)}`}>
          <strong>{item}</strong> {i < items.length - 1 ? `, ` : ``}
        </Link>
      )
    }
  </div>

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


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${ props => props.theme.mediaQueries.sm } {
    flex-direction: row;
  }
`
const ArticleWrap = styled.div`
  width: 100%;
  ${ props => props.theme.mediaQueries.md } {
    width: 70%;
  }  
`
const WidgetsWrap = styled.aside`
  width: 100%;
  ${ props => props.theme.mediaQueries.md } {
    width: 30%;
  }    
`  


export default function Template({
  data, // this prop will be injected by the GraphQL query below.
  pageContext
}) {
  const { next, prev, categorySet, tagSet } = pageContext;

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
      <Wrapper>

        <ArticleWrap>
          <article>
            <h1>{title}</h1>
            <div>{Utils.formatDate(date)}</div>
            { tags && <Tax items={tags} taxSlug="tags"/> }
            { categories && <Category items={categories} /> }
            { featuredImgFluid && <Img fluid={featuredImgFluid} alt={title}/> }

            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </article>

          <PrevNext prev={prev} next={next} />
        </ArticleWrap>

        <WidgetsWrap>
          <LatestPosts />
          <PostArchive />
          <PostCategories categorySet={categorySet}/>
        </WidgetsWrap>

      </Wrapper>
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