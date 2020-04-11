import React from 'react';
import { Flex, useTheme } from '@chakra-ui/core';
import styled from '@emotion/styled';

import { ILatestNewsCards } from '../../types/homePageTypes';
import Section from './Section';
import NewsCard from '../NewsCard';
import useLatestNewsTop3 from '../../helpers/hooks/useLatestNewsTop3';

const InnerWrap = styled(Flex)`
  flex-direction: column;
  margin-bottom: 3em;
  ${(props) => props.theme.mediaQueries.lg} {
    flex-direction: row;
  }
`;

const LatestNewsCards: React.FC<ILatestNewsCards> = ({ settings }) => {
  const { title, actions } = settings;
  const theme = useTheme();
  const posts = useLatestNewsTop3();

  return (
    <Section title={title} bg={theme.home.latestNews.colors.bg} actions={actions}>
      <InnerWrap>
        {posts.map((post, i) => (
          <NewsCard key={i} post={post} />
        ))}
      </InnerWrap>
    </Section>
  );
};

export default LatestNewsCards;