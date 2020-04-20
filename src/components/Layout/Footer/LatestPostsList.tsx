import React from 'react';
import { Flex, useTheme } from '@chakra-ui/core';

import AnimatedLink from '../../AnimatedLink';
import useLatestPostsTop5 from '../../../helpers/hooks/useLatestPostsTop5';

const LatestPostsList: React.FC = () => {
  const theme = useTheme();
  const mb = theme.footer.mbWidgetLink;

  const posts = useLatestPostsTop5();

  return (
    <Flex direction="column" align="start">
      {posts.map((post, i) => (
        <AnimatedLink key={i} to={post.path} mb={mb}>
          {post.title}
        </AnimatedLink>
      ))}
    </Flex>
  );
};

export default LatestPostsList;
