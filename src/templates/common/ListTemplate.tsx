import React from 'react';
import styled from '@emotion/styled';

import { BlogLayout } from '../../components/Layout';
import SEO from '../../components/SEO';
import PostListing from '../../components/PostListing';
import Pagination from '../../components/Pagination';

import toPosts from './toPosts';

const ListTemplate = ({ edges, pageContext, title }) => {
  const posts = toPosts(edges);

  return (
    <BlogLayout title={title}>
      <SEO title={title} pathname={pageContext.pathname} />
      <PostListing posts={posts} />
      <Pagination pageCount={pageContext.pageCount} currentPage={pageContext.currentPage} base={pageContext.base} />
    </BlogLayout>
  );
};

export default ListTemplate;
