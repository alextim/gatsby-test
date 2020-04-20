import React from 'react';

import AsideLayout from './AsideLayout';
import LatestPosts from '../post/widgets/LatestPosts';
import PostArchive from '../post/widgets/PostArchive';
import PostCategories from '../post/widgets/PostCategories';

interface IProps {
  title: React.ReactNode;
}
const BlogLayout: React.FC<IProps> = ({ title, children }) => (
  <AsideLayout
    title={title}
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
