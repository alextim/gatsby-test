import React from 'react';

import SidebarWidget from '../SidebarWidget';
import { IconLink } from '../IconLink';
import useLatestNewsTop5 from '../../helpers/hooks/useLatestNewsTop5';

export default () => {
  const posts = useLatestNewsTop5();
  const icon = 'tag';

  return posts ?
    <SidebarWidget title="Последние публикации">
      {
        posts.map((post, i) => (
          <IconLink key={i} to={post.path} icon={icon}>
            {post.title}
          </IconLink>
        ))
      }
    </SidebarWidget> :
    null;
};
