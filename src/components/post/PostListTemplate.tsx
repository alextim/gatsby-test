import React from 'react';
import styled from '@emotion/styled';

import { ITheme } from '../theme.d';
import { BlogLayout } from '../Layout';
import SEO from '../SEO';
import Pagination from '../Pagination';
import PostCard from './PostCard';
import toPost from './toPost';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${(props) => (props.theme as ITheme).mediaQueries.lg} {
    flex-direction: row;
  }
`;

const ItemWrap = styled.div`
  width: 100%;
  ${(props) => (props.theme as ITheme).mediaQueries.lg} {
    width: 50%;
  }
`;

type Props = {
  edges: Array<any>;
  pageContext: any;
  title: string;
};
const PostListTemplate = ({ edges, pageContext, title }: Props) => {
  return (
    <BlogLayout title={title}>
      <SEO title={title} pathname={pageContext.pathname} />
      <Wrapper>
        {edges.map(({ node }, i) => (
          <ItemWrap key={i}>
            <PostCard post={toPost(node)} />
          </ItemWrap>
        ))}
      </Wrapper>
      <Pagination pageCount={pageContext.pageCount} currentPage={pageContext.currentPage} base={pageContext.base} />
    </BlogLayout>
  );
};

export default PostListTemplate;
