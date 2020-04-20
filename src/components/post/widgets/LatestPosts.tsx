import React from 'react';

import SidebarWidget from '../../SidebarWidget';
import IconLink from '../../IconLink';
import useLatestPostsTop5 from '../../../helpers/hooks/useLatestPostsTop5';

const LatestPosts = () => {
  const posts = useLatestPostsTop5();

  return posts ? (
    <SidebarWidget title="Последние публикации">
      {posts.map((post, i) => (
        <IconLink key={i} to={post.path} icon="tag">
          {post.title}
        </IconLink>
      ))}
    </SidebarWidget>
  ) : null;
};

export default LatestPosts;
