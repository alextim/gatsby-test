import React from 'react';
import { Flex, useTheme } from '@chakra-ui/core';

import AnimatedLink from '../../AnimatedLink';
import useLatestNewsTop5 from '../../../helpers/hooks/useLatestNewsTop5';

const LatestNewsList: React.FC = () => {
  const theme = useTheme();
  const mb = theme.footer.mbWidgetLink;

  const posts = useLatestNewsTop5();

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

export default LatestNewsList;
