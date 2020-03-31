import React from 'react'

import BlogLayout from './BlogLayout'
import SEO from '../../components/SEO'
import PostListing from '../../components/PostListing'
import Pagination from '../../components/Pagination'

import toPosts from './toPosts'


export default ( { edges, pageContext, seoTitle, title } ) => {

    //.filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria

  const posts = toPosts(edges)

  return (
    <BlogLayout>
      <SEO title={seoTitle}/>
      <h1>{title}</h1>
      <PostListing posts={posts} />
      <Pagination
          pageCount={pageContext.pageCount}
          currentPage={pageContext.currentPage}
          base={pageContext.base}
        />

    </BlogLayout>
  )
}