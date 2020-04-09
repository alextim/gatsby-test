import React from 'react'
import styled from '@emotion/styled'

import BlogLayout from './BlogLayout'
import SEO from '../../components/SEO'
import PostListing from '../../components/PostListing'
import Pagination from '../../components/Pagination'

import toPosts from './toPosts';

const Heading = styled.h1`
  text-align: center;
`;

export default ({ edges, pageContext, title }) => {
  const posts = toPosts(edges);

  return (
    <BlogLayout>
      <SEO title={title} pathname={pageContext.pathname}/>
      <Heading>{title}</Heading>
      <PostListing posts={posts} />
      <Pagination
        pageCount={pageContext.pageCount}
        currentPage={pageContext.currentPage}
        base={pageContext.base}
      />

    </BlogLayout>
  );
};
