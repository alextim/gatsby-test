import React from 'react';
import { Flex, useTheme } from '@chakra-ui/core';
import styled from '@emotion/styled';

import { ITheme } from '../theme.d';

import useHomePageSettings from '../../helpers/hooks/useHomePageSettings';
import Section from './Section';
import PostCard from '../post/PostCard';
import useLatestPostsTop3 from '../../helpers/hooks/useLatestPostsTop3';

const InnerWrap = styled(Flex)`
  flex-direction: column;
  margin-bottom: rem;
  ${(props) => (props.theme as ITheme).mediaQueries.lg} {
    flex-direction: row;
  }
`;
const ItemWrap = styled.div`
  width: 100%;
  ${(props) => (props.theme as ITheme).mediaQueries.lg} {
    width: 33.33%;
  }
`;

const LatestPosts = () => {
  const { latestPosts } = useHomePageSettings();
  const { title, actions } = latestPosts;
  const theme = (useTheme() as unknown) as ITheme;
  const posts = useLatestPostsTop3();

  return (
    <Section title={title} bg={theme.home.latestPosts.colors.bg} actions={actions}>
      <InnerWrap>
        {posts.map((post, i) => (
          <ItemWrap key={i}>
            <PostCard post={post} />
          </ItemWrap>
        ))}
      </InnerWrap>
    </Section>
  );
};

export default LatestPosts;
