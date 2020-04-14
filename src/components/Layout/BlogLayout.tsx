import React from 'react';

import AsideLayout from './AsideLayout';
import LatestPosts from '../../components/widgets/LatestPosts';
import PostArchive from '../../components/widgets/PostArchive';
import PostCategories from '../../components/widgets/PostCategories';

const BlogLayout: React.FC<React.ReactNode> = ({ children }) => (
  <AsideLayout
    widgets={
      <>
        <LatestPosts />
        <PostArchive />
        <PostCategories />
      </>
    }
  >
    {children}
  </AsideLayout>
);

export default BlogLayout;
