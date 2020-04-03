import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import { Flex, Heading } from '@chakra-ui/core'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from "@mdx-js/react"

import { DateMeta, CategoryMeta, TagMeta } from '../components/Meta'
import SEO from '../components/SEO'
import { IconLink, IconLinkR } from '../components/IconLink'
import BlogLayout from './common/BlogLayout'

import HelloWorld from '../components/HelloWorld'

const shortcodes = {HelloWorld}

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

export default ({ data, pageContext }) => {
  const { next, prev, pathname } = pageContext
  const { frontmatter, body, excerpt } = data.mdx // , fields
  const { title, description, date, featuredImage, tags, categories } = frontmatter
  const featuredImgFluid = featuredImage ? featuredImage.childImageSharp.fluid : null
  const imgSrc = featuredImgFluid ? featuredImgFluid.src : null
  //const url = fields.slug

  return (
    <BlogLayout>
      <SEO title={title} 
          description={description || excerpt} 
          pathname={pathname}
          image={imgSrc}
          type="article"
          date={date}/> 

          <article>
            <Heading as="h1">{title}</Heading>
            <Flex direction="row" fontWeight="100" fontSize="0.9em">
              { date && <DateMeta date={date} /> }
              { categories && <CategoryMeta icon={['far', 'folder-open']} categories={categories} /> }
            </Flex>
            { tags && <TagMeta tags={tags} /> }
            { featuredImgFluid && <Img fluid={featuredImgFluid} alt={title} /> }
            <MDXProvider components={shortcodes}>
              <MDXRenderer>{body}</MDXRenderer>
            </MDXProvider>
          </article>

          <PrevNext prev={prev} next={next} />

    </BlogLayout>
  )
}

export const pageQuery = graphql`
  query BlogPostById($id: String!) {
    mdx(id: {eq: $id}) {
      body
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